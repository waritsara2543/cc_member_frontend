"use client";

import { DateTimePicker } from "@/components/base/dateTime/DateTimePicker";
import InputBase from "@/components/base/input/inputbase";
import { UploadImage } from "@/components/svgIcon/UploadImage";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addressList } from "@/constants/addressList";
import PinataService from "@/services/pinata.service";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogStates, DialogViews } from "@/store/UIProvider/dialog.type";
import { Campaign__factory } from "@/typechain-types";
import { getMetadataUrl } from "@/utils/metadaUrl";
import Image from "next/image";
import { NFTStorage } from "nft.storage";
import { ChangeEvent, useEffect, useState } from "react";
import { useContractWrite } from "wagmi";
interface IBinaryImageData {
  pointer: number;
  binaryData: ArrayBuffer | string;
  imageSrc: string;
}
const Addcampaign = () => {
  const { openDialog, setDialogView, setDialogState } = useDialog();
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const [selecteEndDate, setSelectedEndDate] = useState<Date>(new Date());
  const [name, setName] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [binaryImageData, setBinaryImageData] = useState<
    Array<IBinaryImageData>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN || "";
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

  const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const handleImageChange = async (
    event: ChangeEvent<HTMLInputElement>,
    pointer: number
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const binaryData = reader.result as string; // This will be an ArrayBuffer
        const base64String = arrayBufferToBase64(reader.result as ArrayBuffer);
        setBinaryImageData([
          ...binaryImageData,
          {
            pointer: pointer,
            binaryData,
            imageSrc: `data:image/png;base64,${base64String}`,
          },
        ]);
      };
      reader.onerror = (error) => {
        console.error("Error reading the file:", error);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const upload = async () => {
    const files: File[] = [];
    binaryImageData.forEach(async (image) => {
      const imageFile = new File(
        [new Blob([image.binaryData])],
        `${image.pointer === 10 ? `claimed.png` : `${image.pointer}point.png`}`,
        {
          type: "image/*",
        }
      );
      files.push(imageFile);
    });
    const cid = await client.storeDirectory(files);
    const imageBaseUrl = await getMetadataUrl(cid);
    const jsonCid = await PinataService.NFTStorageUploadFolder(imageBaseUrl);
    const jsonBaseUrl = await getMetadataUrl(jsonCid);
    await writeAsync({
      args: [
        name,
        detail,
        jsonBaseUrl,
        BigInt(Math.floor(new Date(selectedStartDate).getTime() / 1000)),
        BigInt(Math.floor(new Date(selecteEndDate).getTime() / 1000)),
        BigInt(60 * 60 * 60 * 24), // 60 days
      ],
    });
  };

  const { writeAsync, isError, isSuccess } = useContractWrite({
    address: addressList.Campaign,
    abi: Campaign__factory.abi,
    functionName: "createCampaign",
  });

  useEffect(() => {
    if (isSuccess) {
      setDialogState(DialogStates.SUCCESS);
    } else if (isError) {
      setDialogState(DialogStates.ERROR);
    }
  }, [isSuccess, isError, setDialogState]);

  const imageInputs = [];
  for (let i = 1; i <= 9; i++) {
    imageInputs.push(
      binaryImageData.find((image) => image.pointer === i) ? (
        <Image
          src={
            binaryImageData.find((image) => image.pointer === i)
              ?.imageSrc as string
          }
          alt={i.toString()}
          width={200}
          height={200}
          className="w-[100px] h-[100px] rounded-lg"
        />
      ) : (
        <>
          <div className="flex items-center justify-center w-full ">
            <label className="flex flex-col items-center bg-[#F6F6F6] justify-center w-[100px] h-[100px] p-1 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  ">
              <div className="flex flex-col items-center justify-center  bg-[#F6F6F6]">
                <UploadImage />
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => {
                  handleImageChange(e, i);
                }}
              />
            </label>
          </div>
        </>
      )
    );
  }

  return (
    <main className="flex   flex-col  h-full w-full items-center justify-center  bg-[rgba(0,0,0,0.75)] ">
      <div className="max-w-[1000px] w-full  flex flex-col  pt-32 px-3 lg:px-16 gap-10">
        <span className=" text-[32px] font-semibold">Add Campaign</span>
        <div>
          <h2 className="font-medium">Name Campaign</h2>
          <InputBase
            placeholder="Name"
            className=" w-full rounded-xl border-[1px] border-[#BDBDBD]"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <h2 className="font-medium">Detail Campaign</h2>
          <Textarea
            placeholder="detail"
            className="w-full rounded-xl border-[1px] border-[#BDBDBD]"
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />
        </div>
        <div className=" flex flex-col lg:flex-row justify-center items-center gap-5">
          <div className="flex flex-col gap-1 w-full">
            <h2 className="font-medium">Start Campaign</h2>
            <DateTimePicker
              date={selectedStartDate}
              setDate={setSelectedStartDate}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h2 className="font-medium">End Campaign</h2>
            <DateTimePicker
              date={selecteEndDate}
              setDate={setSelectedEndDate}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-medium">Upload image NFT</h2>
          <div className="flex flex-col lg:flex-row w-full gap-4">
            <div className="flex flex-col gap-5 mx-auto max-w-[350px] w-full p-5 border-[1px] border-[#DCDCDC] rounded-xl bg-[#3D3D3D]">
              {binaryImageData.find((image) => image.pointer === 10) ? (
                <>
                  <span>Upload image</span>
                  <Image
                    src={
                      binaryImageData.find((image) => image.pointer === 10)
                        ?.imageSrc as string
                    }
                    alt={(10).toString()}
                    width={400}
                    height={400}
                    className="w-full h-full rounded-lg"
                  />
                </>
              ) : (
                <>
                  <span>Upload image</span>
                  <div className="flex items-center justify-center h-full">
                    <label className="flex flex-col items-center bg-[#F6F6F6] justify-center w-full min-h-[285px] h-full p-1 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  ">
                      <div className="flex flex-col items-center justify-center bg-[#F6F6F6]">
                        <UploadImage />
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          handleImageChange(e, 10);
                        }}
                      />
                    </label>
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col gap-5 mx-auto max-w-[350px] w-full p-5 border-[1px] border-[#DCDCDC] rounded-xl bg-[#3D3D3D]">
              <span>Upload 9 image</span>
              <div className="grid grid-cols-3 w-full text-black gap-2">
                {imageInputs}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mb-5">
          <Button
            disabled={binaryImageData.length < 10}
            onClick={async () => {
              setDialogView(DialogViews.STATE_DIALOG);
              setDialogState(DialogStates.LOADING);
              openDialog();
              await upload();
            }}
            type="button"
            variant="ghost"
            className="lg:border-[1px] border-[0px] p-3 font-semibold "
            style={{
              borderRadius: "99px",
              background:
                "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
            }}
          >
            <h5 className=" text-white font-medium">
              {isLoading ? "Loading..." : "Add Campaign"}
            </h5>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Addcampaign;

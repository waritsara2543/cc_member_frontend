import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDialog from "@/store/UIProvider/dialog.store";
import { Copy } from "lucide-react";
import Image from "next/image";
import QRCode from "react-qr-code";
import { useAccount } from "wagmi";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

// interface valueQR {
//   adress?: string;
//   id?: number;
// }

export function QrDialog() {
  const { closeDialog } = useDialog();
  const { address } = useAccount();
  // const [shortAddress, setShortAddress] = useState<string>();
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      duration: 1000,
      description: "Copy Success",
    });
  };

  // useEffect(() => {
  //   if (address) {
  //     setShortAddress(`${address.slice(0, 6)} ... ${address.slice(-4)}`);
  //   }
  // }, [address]);

  const objValue = {
    address: "0xC0faa153aa9BA5B337DC4Ec2552e8A7E36899d15",
    id: 1,
  };

  return (
    <DialogContent className="max-w-[350px] ssm:max-w-[480px] px-5 rounded-2xl">
      <DialogHeader>
        <DialogTitle className=" break-words text-xl font-semibold w-[300px]">
          <Image
            className="cursor-pointer w-[105px]   h-[23px] "
            src="/image/Logo.png"
            width={105}
            height={23}
            alt="logo"
          />
        </DialogTitle>
      </DialogHeader>
      <hr className=" border-[#3D3D3D]" />

      <div className=" flex flex-col justify-center items-center">
        <h2>Scan QR Code</h2>
        <h5 className=" font-normal text-[#7C7C7C] max-w-[280px] ssm:max-w-[100%] w-full text-center">
          Show this QR code to the administrator to claim coffee
        </h5>
        <div className=" flex py-4 mt-3 p-10 ssm:px-[120px] justify-center items-center rounded-[10.822px] border-[1px] border-[#464646] bg-[#3D3D3D]">
          <QRCode
            size={256}
            bgColor="transparent"
            fgColor="#3D3D3D"
            className="bg-gradient-to-br from-orange-500 to-orange-700 text-black"
            style={{ height: "194px", width: "194px" }}
            value={JSON.stringify(objValue)}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
        <hr className=" w-[40%]  border-[#3D3D3D]" />
        <span className="w-[100%] mx-2 text-xs text-center font-normal text-[#7C7C7C]">
          or copy this address to the administrator
        </span>
        <hr className=" w-[40%]  border-[#3D3D3D]" />
      </div>
      <div className=" flex flex-row justify-center items-center ">
        <p className=" text-[14px] text-[#f6f6f6] overflow-scroll max-w-[250px] ssm:max-w-[100%] w-full  font-medium p-2 border-[1px] h-[40px] border-[#BDBDBD] hover:border-[#FFA532] bg-[#3D3D3D] rounded-[6px]">
          {address || "0xC0faa153aa9BA5B337DC4Ec2552e8A7E36899d15"}
        </p>
        <div className="p-2 border-[1px] border-[#BDBDBD] icon hover:border-[#FFA532] bg-[#3D3D3D] rounded-[6px] h-[40px] ml-2">
          <Copy
            onClick={() => {
              copyText(address || "");
            }}
            className=" cursor-pointer "
            size={21}
          />
        </div>
      </div>
      <hr className=" border-[#3D3D3D]" />
      <Button
        onClick={() => {
          closeDialog();
        }}
        type="button"
        variant="ghost"
        className=" px-3 font-semibold  w-full h-[48px]"
        style={{
          borderRadius: "99px",
          background: "#3D3D3D",
        }}
      >
        <h5 className=" text-white font-medium">Cancel</h5>
      </Button>
    </DialogContent>
  );
}

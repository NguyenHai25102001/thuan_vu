import React, { useContext } from "react";
import { Page, Sheet } from "zmp-ui";
import { boxIcon, checkBoxIcon, closebtnIcon } from "../../utils/iconSvgNew";
import { useQuery } from "@tanstack/react-query";
import addressApi from "../../apis/address.apis";
import { IWard } from "../../types/address.types";

interface IProps {
  setNameWard: (value: string) => void;
  setIdWard: (value: number) => void;
  districtId: number | string;
}

const ModalWard = React.forwardRef((props: IProps, ref) => {
  const [showModalWard, setShowModalWard] = React.useState(false);
  const [dataWard, setDataWard] = React.useState<IWard[]>([]);
  const { data } = useQuery({
    queryKey: ["dataWard", props.districtId],
    queryFn: () => {
      return addressApi.getWard(props.districtId);
    },
    enabled: Boolean(props.districtId),
    onSuccess: (data) => {
      const newData = data.data.data.map((item) => {
        return {
          ...item,
          choose: false,
        };
      });
      setDataWard(newData);
    },
  });
  React.useImperativeHandle(ref, () => {
    return {
      setShowModalWard,
    };
  });

  const handleItem = (item) => {
    const copied = [...dataWard];
    copied.map((element) => {
      if (element.WardCode === item.WardCode) {
        element.choose = true;
      } else {
        element.choose = false;
      }
    });
    setDataWard(copied);
    props.setNameWard(item.WardName);
    props.setIdWard(item.WardCode);
    setShowModalWard(false);
  };
  if (!showModalWard) return <></>;
  return (
    <div className="absolute w-full h-full top-0 bg-[#000000] bg-opacity-80 z-50">
      <div className="h-full w-full bg-white mt-24 rounded-t-2xl">
        <div className="flex pl-4 border-b border-b-[#626262]">
          <div className="flex items-center flex-1">
            <p className="text-black text-base text-center flex-1 ml-12 mt-1">
              Chọn Tỉnh/TP
            </p>
          </div>
          <div className="pr-4 pl-4" onClick={() => setShowModalWard(false)}>
            {closebtnIcon}
          </div>
        </div>
        <Page className="w-full h-full pb-40 no-scrollbar" hideScrollbar>
          <div>
            {!!dataWard &&
              !!dataWard.length &&
              dataWard.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center px-2 py-2 border-b border-b-[#f5f5f5]]"
                    onClick={() => handleItem(item)}
                  >
                    {!item.choose ? boxIcon : checkBoxIcon}
                    <p className="text-black text-base font-normal ml-2">
                      {item.WardName}
                    </p>
                  </div>
                );
              })}
          </div>
        </Page>
      </div>
    </div>
  );
});
export default ModalWard;

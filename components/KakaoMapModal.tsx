import { Modal } from "antd";
import { FC } from "react";
import { Place } from "@/components/KakaoMap";

interface KakaoMapModalProps {
  isMarkerClicked: boolean;
  marker: Place;
  onCancel: () => void;
}

export const KakaoMapModal: FC<KakaoMapModalProps> = ({
  isMarkerClicked,
  marker,
  onCancel,
}) => {
  return (
    <div className="absolute z-50">
      <Modal
        title={marker.name}
        style={{
          position: "fixed",
          top: "600px",
          bottom: "100px",
          left: "48px",
        }}
        width={"60vh"}
        open={isMarkerClicked}
        onCancel={onCancel}
        footer={[]}
      >
        <p>주소: {marker.address}</p>
        <br />
        ABOUT
        <p>거래일자: 2024년 1월 1일</p>
        <p>전용면적: 125.05m2</p>
        <p>매매가격: 250,000,000원</p>
      </Modal>
    </div>
  );
};

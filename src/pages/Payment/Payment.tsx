import { useState } from "react";
import ListInfo from "./components/Dropdown/listInfo/ListInfo";
import ListPoint from "./components/Dropdown/ListPoint/ListPoint";
import ListCheck from "./components/Dropdown/ListCheck/ListCheck";
import ListCheckMiddle from "./components/Dropdown/ListCheckMiddle/ListCheckMiddle";
import TextField from "./components/TextField/Text-Field";
import CustomCheckbox from "./components/CustomCheckbox";
import PaymentMethodContainer from "./components/Container/MethodContainer";
import BankContainer from "./components/Container/BankContainer"; 

export default function PaymentPage() {
  const [name, setName] = useState("");

  return (
    <main>
      <ListInfo label="예매자 정보 입력" />
      <ListPoint leftLabel="포인트 사용" rightLabel="0p" />
      <ListCheck label="예매자 정보 입력" />
      <ListCheckMiddle label="NOL 인터파크 페이" />
      <TextField
        placeholder="예매자 이름"
        value={name}
        onChange={setName}
      />
      <CustomCheckbox />
      <PaymentMethodContainer />
      <BankContainer />
      
    </main>
  );
}

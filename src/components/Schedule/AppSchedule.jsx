import Search from "antd/es/transfer/search";
import "./Schedule.css";
import { Input, List, Typography } from "antd";

export default function Schedule() {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  const item = {
    понедельник: 1,
    Вторник: 2,
  };
  return (
    <>
      <Search
        placeholder="Номер аудитории"
        className="search-input"
        onSearch={onSearch}
        enterButton
      />
      <List bordered dataSource={data} renderItem={(i) => console.log({ i })} />
    </>
  );
}

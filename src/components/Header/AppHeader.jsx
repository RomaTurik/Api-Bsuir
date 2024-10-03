import { Typography, Tabs } from "antd";
import "./Header.css";

export default function Header() {
  const onChange = (key) => {
    console.log(key);
  };

  let TabsArr = ["По аудитории", "По преподователю"];

  return (
    <>
      <header className="header">
        <Typography.Title level={2}>
          Расписание занятий в Бгуир
        </Typography.Title>
        <Tabs
          onChange={onChange}
          type="card"
          items={TabsArr.map((tab, i) => {
            const id = String(i + 1);
            return {
              label: tab,
              key: id,
            };
          })}
        />
      </header>
      <hr />
    </>
  );
}

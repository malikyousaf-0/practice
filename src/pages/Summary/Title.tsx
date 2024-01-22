export default function Title(props: any) {
  return (
    <div className="title rounded shadow bg-light p-2 m-1">
      {props.icon}
      {props.name}
      <p className={`text text-${props.color}`}>{props.value}</p>
    </div>
  );
}

import { HiDotsHorizontal } from "react-icons/hi";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardActiveProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
}

const Card = ({children, className = "", ...props }: CardProps) => {

  const stopBubble = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <section
      className={className + "flex flex-col p-3 shadow-md select-none hover:shadow-lg transition-shadow cursor-pointer break-words whitespace-normal min-h-[120px]"}
      {...props}
    >
      <div className="ml-auto hover:rotate-90 transition-transform cursor-pointer">
          <HiDotsHorizontal className="text-xl" onClick={stopBubble} />
      </div>
      {children}
    </section>
  );
};

Card.Header = ({children, ...props }: CardProps) => {
  return (
    <h4 className="font-bold" {...props}>
      {children}
    </h4>
  );
};
Card.Description = ({children, ...props }: CardProps) => {
  return <p {...props}>{children}</p>;
};
Card.Date = ({children, ...props }: CardProps) => {
  return <p {...props}>{children}</p>;
};
Card.Active = ({active, ...props }: CardActiveProps) => {
  return (
    <p className={`${active ? "text-green-500" : "text-red-500"}`} {...props}>
      {active ? "Active" : "Not-Active"}
    </p>
  );
};

export default Card;

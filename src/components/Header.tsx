import React, {FC} from "react"; //FC = Function component

interface HeaderProps {
    title: string;
    description: string;
}

const Header: FC<HeaderProps> = ({ title, description }) => {
    return (
        <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Header;
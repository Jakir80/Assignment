import Image from "next/image";


const FooterImage = () => {
    return (
        <div className="mb-5 mt-5">
            <Image width={500} height={500} src="/image.webp" alt='' />
        </div>
    );
};

export default FooterImage;
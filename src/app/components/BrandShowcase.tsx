import Image from "next/image";
import Link from "next/link";

const brands = [
    {
        name: "CPR",
        logo: "/brands/cpr.webp",
        url: "https://creativepeoplerepublic.com/",
    },
    {
        name: "GraceTech",
        logo: "/brands/gracetech.svg",
        url: "https://gracetechproperties.com",
    },
    {
        name: "Partner Mobile",
        logo: "/brands/partner.png",
        url: "https://partnermobile.com",
    },
    {
        name: "Tiqbuy",
        logo: "/brands/tiqbuy.svg",
        url: "https://tiqbuy.com",
    },
];

const BrandShowcase = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-10">
                    Companies I&apos;ve Worked With
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {brands.map((brand) => (
                        <Link
                            href={brand.url}
                            key={brand.name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="grayscale hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={250}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandShowcase;

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RelatedProduct = ({ product, file_url }) => {
  const router = useRouter();
  //   const handleProductDetail = (slug) => {
  //     router.push(`products/${slug}`);
  //   };
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-md product-cardza">
      <Link href={`/products/${product.slug}`}>
        {" "}
        <img
          className="w-64 h-64 resize-img cursor-pointer"
          src={`${file_url}/${product.photo}`}
          alt="Card"
        />
      </Link>

      <Link
        href={`/products/${product.slug}`}
        className="mt-4 text-center product-title-color cursor-pointer"
      >
        {product.title}
      </Link>
    </div>
  );
};

export default RelatedProduct;

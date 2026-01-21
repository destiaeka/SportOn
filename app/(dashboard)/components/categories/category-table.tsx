import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categoryData = [
    {
        name: "Running",
        imageUrl: "/images/category/category-running.svg",
        description: "lorem ipsum"
    },
    {
        name: "Badminton",
        imageUrl: "/images/category/category-badminton.svg",
        description: "lorem ipsum"
    }
]

const CategoryTable = () => {
    return (
        <div className="bg-white rounded-xl border-gray-200">
            <table className="w-full text-left boder-collapse">
                <thead>
                    <tr className="borde-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Category Name</th>
                        <th className="px-6 py-4 font-semibold">Description</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryData.map((data, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex gap-2">
                                        <div className="aspect-square bg-gray-100 rounded-md">
                                            <Image src={data.imageUrl} width={52} height={52} alt={data.name} className="aspect-square object-contain"/>
                                        </div>
                                        <span>{data.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">{data.description}</td>
                                <td className="items-center px-7 py-7.5 flex gap-3 text-gray-600">
                                    <button>
                                        <FiEdit2 size={20}/>
                                    </button>
                                    <button>
                                        <FiTrash2 size={20}/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CategoryTable;
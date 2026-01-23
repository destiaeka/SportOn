import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TCategorytableProps = {
    categories: Category[]
    onEdit: (category: Category) => void
    onDelete: (id: string) => void
}

const CategoryTable = ({categories, onDelete, onEdit}: TCategorytableProps) => {
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
                        categories.map((data, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex gap-2">
                                        <div className="aspect-square bg-gray-100 rounded-md">
                                            <Image src={getImageUrl(data.imageUrl)} width={52} height={52} alt={data.name} className="aspect-square object-contain"/>
                                        </div>
                                        <span>{data.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">{data.description}</td>
                                <td className="items-center px-7 py-7.5 flex gap-3 text-gray-600">
                                    <button onClick={() => onEdit?.(data)} className="cursor-pointer">
                                        <FiEdit2 size={20} className="cursor-pointer"/>
                                    </button>
                                    <button onClick={() => onDelete?.(data._id)} className="cursor-pointer">
                                        <FiTrash2 size={20} className="cursor-pointer"/>
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
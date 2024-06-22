import { useGetProductsQuery } from "../../features/products/productsApiSlice";

const Products = () => {
    const { data, isLoading } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;

    return (
        <div
            style={{
                textAlign: "center",
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ width: "50px", height: "50px" }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;

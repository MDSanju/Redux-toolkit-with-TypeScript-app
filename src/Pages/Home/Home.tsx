import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/Store";
import { getUser } from "../../Store/Slices/AuthSlice";
import { fetchProducts } from "../../Store/Slices/ProductSlice";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "@mantine/core";
import { AddProductBtn, TableWarp } from "../../Shared/Styles/Home.styles";
// import { TableWarp } from "@/Shared/Styles/Home.styles";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const rows = products.map((element) => (
    <tr key={element.id}>
      <td>{element.name}</td>
      <td>{element.category}</td>
      <td>{element.description}</td>
    </tr>
  ));

  return (
    <TableWarp>
      {user.email && user.password && (
        <div>
          <Table striped highlightOnHover withBorder withColumnBorders>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <AddProductBtn>
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "blue", deg: 60 }}
              onClick={() => navigate("/add-product")}
            >
              Add Product
            </Button>
          </AddProductBtn>
        </div>
      )}
    </TableWarp>
  );
};

export default Home;

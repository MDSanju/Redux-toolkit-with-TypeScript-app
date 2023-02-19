import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../Store/Slices/ProductSlice";
import { TextInput, Button, Group, Box, Select, Textarea } from "@mantine/core";
import { AddProductWarp } from "../../Shared/Styles/AddProduct.styles";

const { v4: uuidv4 } = require("uuid");

type Option = { value: string; label: string };

const options: Option[] = [
  { value: "Food", label: "Food" },
  { value: "Clothing", label: "Clothing" },
  { value: "Vehicle", label: "Vehicle" },
  { value: "Household Accessory", label: "Household Accessory" },
];

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      category: { value: string };
      desc: { value: string };
    };

    const name = target.name.value;
    const category = target.category.value;
    const desc = target.desc.value;

    const newProduct = {
      id: uuidv4(),
      name: name,
      category: category,
      description: desc,
    };
    dispatch(createProduct(newProduct));
    navigate("/");
  };

  return (
    <AddProductWarp>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={handleCreateProduct}>
          <TextInput
            withAsterisk
            label="Product name"
            name="name"
            placeholder="Product"
            required
          />

          <Select
            data={options}
            label="Choose category"
            name="category"
            placeholder="Category"
            withAsterisk
            required
          />

          <Textarea
            placeholder="Description"
            label="Product description"
            name="desc"
            withAsterisk
            required
          />

          <Group position="right" mt="md">
            <Button type="submit">Add Product</Button>
          </Group>
        </form>
      </Box>
    </AddProductWarp>
  );
};

export default AddProduct;

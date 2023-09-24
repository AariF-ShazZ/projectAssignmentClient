import { Box, FormControl, FormLabel, Input, InputGroup, Select } from '@chakra-ui/react'


const Body = ({formData,setFormData}) => {
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    
    return (
        <Box>
            <form>
                <FormControl>
                    <InputGroup flexDirection={"column"} m={"2% 0"} p={"5px 10px"}>
                        <FormLabel>Enter Title</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter Title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                    <InputGroup flexDirection={"column"} m={"2% 0"} p={"5px 10px"}>
                        <FormLabel>Enter Price</FormLabel>
                        <Input
                            type="number"
                            placeholder="Enter Price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                    <InputGroup flexDirection={"column"} m={"2% 0"} p={"5px 10px"}>
                        <FormLabel>Enter Description</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter Description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                    <InputGroup flexDirection={"column"} m={"2% 0"} p={"5px 10px"}>
                        <FormLabel>Enter Image URL</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter Image URL"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                    <InputGroup flexDirection={"column"} m={"2% 0"} p={"5px 10px"}>
                        <FormLabel>Select Category</FormLabel>
                        <Select
                            placeholder="Select Category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                        >
                            <option value="electronics">electronics</option>
                            <option value="jewelery">jewelery</option>
                            <option value="men's clothing">men's clothing</option>
                            <option value="women's clothing">women's clothing</option>
                        </Select>
                    </InputGroup>
                </FormControl>
            </form>

        </Box>
    )
}

export default Body
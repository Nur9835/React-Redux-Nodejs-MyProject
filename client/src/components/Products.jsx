import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//productlistten alındı cat filters sort
const Products = ({ cat, filters, sort }) => {
  // console.log(cat,filters,sort);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {

    const getProducts = async () => {
      try {
        const res = await axios.get(
          // prop olarak gelen kategori bilgisine göre ürünlerin apiden çekilmesi
          // eğer categori bilgisi yoksa tüm ürünler
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        // products'a data set edildi
      } catch (err) {}
    };


    getProducts();
  }, [cat]);



  useEffect(() => {
    // gelen categori ,ürünler ve 
    // filtre ye göre ilgili 
    // kategorideki ürünlerin listelenmesi
    // entries filtreli ürünlerden bir dizi oluşturur
     // includes:içerilme kontrolü
    // bir kategori varsa filtreli ürünler
    //  ve onları filtreler kullanarak ayarlama
    cat &&
      setFilteredProducts(
        products.filter( (item) =>
        Object.entries(filters).every(([key, value]) =>   
        // filtrelileri seç her öğe için key ve değeri al
        // öğe key ve değeri içeriyorsa filtreleyeceğiz
      item[key].includes(value)
    
          )
        )
      );
  }, [products, cat, filters]);


  

  useEffect(() => {

    // ürünleri sıralama 

    if (sort === "newest") {
      // en yeni ürünlerden eskiye doğru sıralama
      // önceki filtrelenmiş ürünleri seçeceğiz
      //  ve ondan sonra sıralama olacak
      // prev filtre ürünlerinin 
      // içindeki tüm ögeleri içeriyor
      // bu yüzden sıralayacağz

      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      // fiyata göre artan sıralama
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
      // fiyata göre azalan
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {
      // Kategori varsa filteredProducts yoksa tüm ürünler
      cat  ? filteredProducts.map(
        (item) =>
       <Product item={item} key={item.id} />
       )
        : products
        // kategori yoksa diziyi dilimle 8 ürünün görünmesi için
            .slice(0, 8)
            .map((item) => 
            <Product item={item} key={item.id} />
            )}
    </Container>
  );
};

export default Products;

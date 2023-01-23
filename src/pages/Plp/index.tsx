import React, { useEffect, useState, useMemo } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from 'react-redux';

import { Banner } from "../../components/Banner";
import { Select } from "../../components/Dropdown";
import { ProductCard } from "../../components/ProductCard";
import { Cart } from "../../components/CartComponents/Cart";

import { getProducts } from "../../services/index";
import RootState from "../../interfaces/Product";
import Product from "../../interfaces/Product";

import { setData } from '../../store/reducers/productsReducer';
import { addToCart } from "../../store/reducers/cartReducer";
import { orderBy } from "../../utils/helpers";

import { StyledContainer, Container } from "./styles";
import { errorType, RangeVariant } from "../../types/types";

const OptionsrangeList = ["Highest Price", "Lowest Price", "Title - A to Z", "Title - Z to A"];

export function Plp() {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.data);

    const [rangeSelect, setRangeSelect] = useState<RangeVariant>("Title - A to Z");

    const { data, status, isLoading } = useQuery<Product[]>('products',
        getProducts,
        {
          initialData: [],
        }
      );

    const memoProducts = useMemo(() => {
        if(products.length) {
            return orderBy(products, rangeSelect);
        }
        return products;
    }, [products, rangeSelect])


    
    useEffect(() => {
        if (status === errorType.success && data) {
          dispatch(setData(data));
        }
      }, [data, dispatch]);

    return (
        <>
            <Banner />
            <Select
                small={true}
                options={OptionsrangeList}
                value={rangeSelect}
                onChange={(value: RangeVariant) => setRangeSelect(value)}
                dropUp={true}
            />
            <StyledContainer>
                {isLoading && <Container>Fetching Data....</Container>}
                {status === errorType.error && <Container>Error Fetching Data....</Container>}
                {status === errorType.success &&
                <>
                <Container>
                { data && memoProducts?.map(product => 
                    <ProductCard 
                        key={product.id} 
                        title={product.title} 
                        price={product.variants[0].price} 
                        image={product.images[0].src}
                        addToCart={() => dispatch(addToCart(product as Product))}
                    />)}
            </Container>
            <Cart />
            </>
                }
            </StyledContainer>
        </>
    )
}

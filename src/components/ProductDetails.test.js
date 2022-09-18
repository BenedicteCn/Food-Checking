import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from "@testing-library/react";
import axios from 'axios';

import ProductDetails from "./ProductDetails";

jest.mock('axios');

describe('Testing the component Product Details', () => { // optional method to wrap a group of tests with
  it('Testing printing of product with id = 1', async () => {

    // mocking API GET call result data
    const data = {
      product: {
        id: 1,
        product_name: 'Cake',
        allergens_hierarchy: ['nut', 'almond'],
        image_front_url: 'https://google.com/image/gateau-benedicte',
        categories: 'Food',
        ingredients_text: 'Chocolate, Vanilla, Butter'
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: data }));
  
    // render component via a Memory Router to simulate the route "/1"
    const { findByText, getByText } = render(
      <MemoryRouter initialEntries={[`/${data.product.id}`]}>
        <ProductDetails/>
      </MemoryRouter>
    );
  
    // Start of the tests

    // API Call tests
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(axios.get).toHaveBeenCalledWith(
      `https://world.openfoodfacts.org/api/v0/product/${data.product.id}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`
    );
  
    // Jest-dom tests
    // /!\ important line below --> waits for the jest-dom to be visible after the API GET call!
    const headingElement = await findByText(data.product.product_name);
    expect(headingElement).toHaveTextContent(data.product.product_name);
    expect(headingElement.tagName).toBe('H3');
    const categoriesParagraphElement = getByText(/Catégories/); // substring match (regex)
    expect(categoriesParagraphElement).toHaveTextContent(`Catégories : ${data.product.categories}`);
    expect(categoriesParagraphElement.tagName).toBe('P');
    const ingredientsParagraphElement = getByText(/Ingrédients/);
    expect(ingredientsParagraphElement).toHaveTextContent(`Ingrédients : ${data.product.ingredients_text}`);
    expect(ingredientsParagraphElement.tagName).toBe('P');
    const allergensParagraphElement = getByText(/Allergènes/);
    expect(allergensParagraphElement).toHaveTextContent(`Allergènes : ${data.product.allergens_hierarchy.join(', ')}`);
    expect(allergensParagraphElement.tagName).toBe('P');
  });
});

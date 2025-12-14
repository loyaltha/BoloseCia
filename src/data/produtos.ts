import bolosData from './bolos.json'; 
import { Product } from '../contexts/CartContext'; 

export function getProductById(id: number): Product | undefined {
    const products = bolosData as unknown as Product[];
    
    // Verificação de segurança: O JSON deve ser um array.
    if (!Array.isArray(products)) {
        console.error("Erro interno: bolos.json não está formatado como um array.");
        return undefined;
    }
    
    return products.find((product) => product.id === id);
}
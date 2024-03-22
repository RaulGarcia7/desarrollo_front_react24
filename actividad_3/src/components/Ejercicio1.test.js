import Ejercicio1 from "./Ejercicio1";
import { render, screen } from '@testing-library/react';


test("The select component works", () => {
    const items = ["Option 1", "Option 2", "Option 3"];
    const value = "Option 2"

    //Renderizado de componente
    render(<Ejercicio1 items={items} value={value} onChange={() => {}} />);

    const selectElement = screen.getByRole('combobox');

    //Existe en el documento y con el valor seleccionado
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.value).toBe(value);

    //Presencia y valores de las opciones
    items.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument();
        expect(screen.getByText(item).value).toBe(item);
    });
    
});


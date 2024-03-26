import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('<Button />', () => {
    it("should match snapshot without props", () => {
        render(<Button />);
        expect(screen.getByRole("button")).toMatchSnapshot();
    });
    

    it("should match snapshots with type='success'", () => {
        render(<Button type='success'/>);
        expect(screen.getByRole("button")).toMatchSnapshot();
    });

    it("should match snapshot with type='error'", () => {
        render(<Button type="error" />);
        expect(screen.getByRole("button")).toMatchSnapshot();
    });
    
    it("should match snapshot with type='warning'", () => {
        render(<Button type="warning" />);
        expect(screen.getByRole("button")).toMatchSnapshot();
    });
    
    it("should match snapshot with type='info'", () => {
        render(<Button type="info" />);
        expect(screen.getByRole("button")).toMatchSnapshot();
    });
});
import Loading from './index';
import {render, screen} from '@testing-library/react';

describe('<Loading/>',() => {
    it('Debe aparecer en el documento' , async() => {
        //Arrange
        //Act
        render (<Loading/>);
        const loading = screen.getByRole('progressbar');
        //Assert
        expect (loading).toBeInTheDocument();
    })
})
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/form/form.js';

Enzyme.configure({ adapter: new Adapter() });


describe('Resty API', () => {
    it('Form already exist in our app', () => {
        let app = shallow(<Form />);
        expect(app.find('button').exists()).toBeTruthy();
    })

    it('render correctly to the DOM', ()=> {
        let app = renderer.create(<Form />);
        expect(app).toMatchSnapshot();
      });
})
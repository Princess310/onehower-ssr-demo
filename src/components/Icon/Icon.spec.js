import { shallow } from 'vue-test-utils'
import Icon from '@/components/Icon';

describe('Icon.vue', () => {
  it('should set correct size and color', () => {
    const wrapper = shallow(Icon, {
      propsData: {
        size: '32px',
        color: 'green',
        // type prop is control by svg-sprite-loader like require('../../icons/github.svg'),
        type: {
          default: {
            id: 'test',
          },
        },
      },
    });

    const attributes = wrapper.find('svg').attributes();
    expect(attributes.color).toBe('green');
    expect(attributes.width).toBe('32px');
  });

  it('should match a snapshot', () => {
    const wrapper = shallow(Icon, {
      propsData: {
        // type prop is control by svg-sprite-loader like require('../../icons/github.svg'),
        type: {
          default: {
            id: 'test',
          },
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  }) 
});

import * as iro from '@jaames/iro';
import * as React from 'react';
import './colorpalette.css';
interface IProps {
  colors: string[];
  customize?: boolean;
  title?: string;
  selectedColor?: (colorCode: string) => void;
}
interface IState {
  colors: string[];
  isColorPickerShow: boolean;
  currentColor: string;
}
export default class ColorPalette extends React.PureComponent<IProps, IState> {
  private ColorPicker: any;
  private node: any;

  constructor(props: IProps) {
    super(props);
    this.state = {
      colors: [],
      currentColor: '',
      isColorPickerShow: false
    };
  }

  public componentDidMount() {
    if (this.props.customize) {
      this.ColorPicker = new iro.ColorPicker('.inner', {
        width: 200,
        height: 240,
        sliderHeight: 17
      });

      this.ColorPicker.on('color:change', (color: iro.Color) => {
        this.setState({ currentColor: color.hexString });
      });
    }
  }

  public render() {
    const colorMap = [...this.props.colors, ...this.state.colors].map(
      (e, i) => (
        <span
          onClick={colorCode => this.onSelectColor(e)}
          key={i}
          style={{ backgroundColor: e }}
        />
      )
    );

    return (
      <div>
        {this.props.customize ? (
          <div className="colorpicker-display-box">
            <div className="new-colors">
              <div onClick={this.onColorPickerShow} className="add-color" />
            </div>
            <div
              ref={node => {
                this.node = node;
              }}
              className={`colorpicker ${
                this.state.isColorPickerShow ? 'show' : ''
              }`}
            >
              <div className="inner" />
              <div className="color-code">
                Color code
                <span id="color">{this.state.currentColor}</span>
              </div>
              <input onClick={this.onSaveColor} type="button" value="Apply" />
            </div>
          </div>
        ) : null}

        <div className="colorpicker-palette">
          {this.props.title ? <p>{this.props.title}</p> : null}
          <div className="colors">{colorMap}</div>
        </div>
      </div>
    );
  }
  private onSelectColor = (e: string) => {
    if (this.props.selectedColor) {
      this.props.selectedColor(e);
    }
  };
  private onSaveColor = () => {
    document.removeEventListener('click', this.handleOutsideClick, false);
    const newColors = [...this.state.colors, this.state.currentColor];
    this.setState(prevState => ({
      isColorPickerShow: !prevState.isColorPickerShow,
      colors: newColors
    }));
  };

  private handleOutsideClick = (e: MouseEvent) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.onColorPickerShow();
  };

  private onColorPickerShow = () => {
    if (this.props.customize) {
      if (!this.state.isColorPickerShow) {
        document.addEventListener('click', this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
      this.setState(prevState => ({
        isColorPickerShow: !prevState.isColorPickerShow
      }));
    }
  };
}

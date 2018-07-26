import * as React from 'react';
import InputNumber from '../InputNumber/InputNumber';
import './bodyspacing.css';

interface IProps {
  top: number;
  bottom: number;
  left: number;
  right: number;
  handleChange: (
    { value, position }: { value: number; position: string }
  ) => void;
}
export default class BodySpacing extends React.Component<IProps> {
  public render() {
    const { left, right, bottom, top } = this.props;
    return (
      <div className="body-padding-box">
        <p className="small-title">Body spacing (padding)</p>
        <div className="setting-row">
          <div className="setting-col">
            <label className="small-label">Left</label>
            <div className="plus-minus-box">
              <InputNumber
                value={left}
                onValueChanged={this.onInputValueChanged}
              />
            </div>
          </div>
          <div className="setting-col">
            <label className="small-label">Right</label>
            <div className="plus-minus-box">
              <InputNumber
                value={right}
                onValueChanged={this.onInputValueChanged}
              />
            </div>
          </div>
        </div>
        <div className="setting-row">
          <div className="setting-col">
            <label className="small-label">Top</label>
            <div className="plus-minus-box">
              <InputNumber
                value={top}
                onValueChanged={this.onInputValueChanged}
              />
            </div>
          </div>
          <div className="setting-col">
            <label className="small-label">Bottom</label>
            <div className="plus-minus-box">
              <InputNumber
                value={bottom}
                onValueChanged={this.onInputValueChanged}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onInputValueChanged = (newValue: number) => {
    this.props.handleChange({ value: newValue, position: 'left' });
  };
}

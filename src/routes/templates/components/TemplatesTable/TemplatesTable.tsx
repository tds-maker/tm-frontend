import * as React from 'react';

import fillImage from '../../../../assets/images/undraw_filing_system.svg';
import { ITemplateListItem } from '../../../../models';
import timeHelper from '../../../../utils/time.helper';
import './templatesTable.css';

export interface IProps {
  templates?: ITemplateListItem[];
  getTemplates? : () => void,
  selectedFolder?: any
}

export default class TemplatesTable extends React.PureComponent<IProps>{
  constructor(props:IProps){
    super(props);
  }

  public componentWillMount(){
    if(this.props.getTemplates){
      this.props.getTemplates();
    }
  }

  public render(){

    
    const folderId = this.props.selectedFolder ? this.props.selectedFolder._id : '';
    const templates = this.props.templates ? this.props.templates.filter(x => x.folderId === folderId): [] as ITemplateListItem[];

    return (
      <div style={{ flex: '1' }}>
        <table className="templates-table">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Template Name</th>
              <th className="text-center">Version</th>
              <th className="text-center">Last Updated</th>
              <th className="text-right" style={{ textAlign: 'right' }}>
                Updated by
              </th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template:ITemplateListItem) => {
              return (
                <tr key={template._id}>
                  <td>{template.name}</td>
                  <td className="text-center">{template.version}</td>
                  <td className="text-center">{timeHelper.relativeTime(template.updatedAt)}</td>
                  <td className="text-right">{template.modifiedBy.fullNameShort}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
  
        {templates.length <= 0 ? (
          <div className="col-text text-center">
            <img src={fillImage} alt="" />
            <h4>Whoa there!</h4>
            <p>
              Want to organize your template into a custome folder? Create a
              folder first! Or just save them to “My Templates”
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}



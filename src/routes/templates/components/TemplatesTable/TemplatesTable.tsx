import * as React from 'react';

import fillImage from '../../../../assets/images/undraw_filing_system.svg';
import {IColumn, Table} from '../../../../components';

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
      <Table columns={this.columns} data={this.formatData(templates)} maxHeight={270} />
        {templates.length <= 0 && (
          <div className="col-text text-center">
            <img src={fillImage} alt="" />
            <h4>Whoa there!</h4>
            <p>
              Want to organize your template into a custome folder? Create a
              folder first! Or just save them to “My Templates”
            </p>
          </div>
        )}
      </div>
    );
  }

  private formatData(templates: ITemplateListItem[]): any {
    return templates.map(template => ({
      name: template.name,
      version: template.version,
      updatedAt: timeHelper.relativeTime(template.updatedAt),
      modifiedBy: template.modifiedBy.fullNameShort
    }));
  }

  private get columns():IColumn[]{
    return [
      { field : 'name', header : 'Template Name', style : { width: '40%' }}, 
      {field : 'version', header : 'Version', className : 'text-center'},
      {field : 'updatedAt', header : 'Last Updated', className : 'text-center'},
      {field : 'modifiedBy', header : 'Updated by', className : 'text-right'}
    ]
  }
}



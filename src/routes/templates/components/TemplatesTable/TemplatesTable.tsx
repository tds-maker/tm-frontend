import * as React from 'react';

import fillImage from '../../../../assets/images/undraw_filing_system.svg';
// import { ITemplate } from '../../../../models/interfaces';
import './templatesTable.css';

// export interface IProps {
//   templates?: ITemplate[];
// }

export default ({ templates = [] }: any) => {
  return (
    <div style={{ flex: '1' }}>
      <table>
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
          {/* {templates.map(template => {
            return (
              <tr key={template._id}>
                <td>{template.name}</td>
                <td className="text-center">{`${template.minorVersion}.${
                  template.majorVerion
                }`}</td>
                <td className="text-center">{template.lastUpdated}</td>
                <td className="text-right">{template.updatedBy}</td>
              </tr>
            );
          })} */}
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
};

import { MagnitudeAttribute, StarDatasourceAttribute } from '../../../../libs/cpstars/openapi';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import { useTranslation } from 'react-i18next';

interface StarDatasourceAttributesListProps {
  datasourceAttributes: StarDatasourceAttribute[];
  magnitudesAttributes: MagnitudeAttribute[];
}

const StarDatasourceAttributesList = (props: StarDatasourceAttributesListProps) => {
  const { t } = useTranslation();

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            <TableRow>
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}>
                <Table className="denseTable">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        {t('star_details.star_datasource_attributes.attribute_name')}
                      </TableCell>
                      <TableCell>
                        {t('star_details.star_datasource_attributes.datasource_name')}
                      </TableCell>
                      <TableCell>{t('star_details.star_datasource_attributes.value')}</TableCell>
                      <TableCell>
                        {t('star_details.star_datasource_attributes.attribute_description')}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.datasourceAttributes.map((attribute) => (
                      <TableRow key={attribute.id}>
                        <TableCell>{attribute.attributeDefinition.name}</TableCell>
                        <TableCell>{attribute.datasource.name}</TableCell>
                        <TableCell>{attribute.value}</TableCell>
                        <TableCell>{attribute.attributeDefinition.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {props.magnitudesAttributes.length > 0 && (
        <TableContainer
          component={Paper}
          className="mt-5">
          <Table aria-label="collapsible table">
            <TableBody>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}>
                  <Table className="denseTable">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          {t('star_details.star_datasource_attributes.attribute_name')}
                        </TableCell>
                        <TableCell>{t('star_details.star_datasource_attributes.value')}</TableCell>
                        <TableCell>
                          {t('star_details.star_datasource_attributes.attribute_description')}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.magnitudesAttributes.map((attribute) => (
                        <TableRow key={attribute.id}>
                          <TableCell>{attribute.attributeDefinition.name}</TableCell>
                          <TableCell>{attribute.value}</TableCell>
                          <TableCell>{attribute.attributeDefinition.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default StarDatasourceAttributesList;

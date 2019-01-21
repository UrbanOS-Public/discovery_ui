import { Component } from 'react'
import React from 'react'
import './dataset-preview.scss'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export default class extends Component {
  componentDidMount () {
    this.props.retrieveDatasetPreview(this.props.dataset_id)
  }

  render () {
    const { datasetPreview } = this.props
    if (!this.props.datasetPreview) { return <div /> }

    const apiResponse = datasetPreview
    const data = apiResponse.content.data.slice(0, 50)
    const columns = apiResponse.content.columns.map((column) => {
      return { Header: column, accessor: column, headerClassName: 'table-header' }
    })

    return (
      <div id='dataset-preview'>
        <div className='header-container'>
          <div className='header-text-items'>
            <div className='preview-header'>Dataset Sample</div>
            <div>This only shows the first 50 rows, to view the entire dataset please download</div>
          </div>
          <a className='download-dataset' href={`${window.API_HOST}/v1/api/dataset/${this.props.dataset_id}/csv`}>Download Dataset</a>
        </div>
        <div id='dataset-preview-table'>
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={50}
            style={{
              height: '400px'
            }}
            className='-striped -highlight'
          />
        </div>
      </div>
    )
  }
}

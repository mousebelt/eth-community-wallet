/**
 *
 *
 * TokenChooserAddForm
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, Divider } from 'antd';

import styled from 'styled-components';

const FormItem = Form.Item;
const Div = styled.div`
  text-align: left;
`;

class TokenChooserAddForm extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.symbol = values.symbol.toLowerCase();
        this.props.onSubmitNewToken(values);
      }
    });
  }

  handleCancel = (e) => {
    e.preventDefault();

    this.props.onHideTokenForm();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Div>
        <Divider>Add Token</Divider>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Symbol">
            {getFieldDecorator('symbol', {
              rules: [{ required: true, message: 'Please input the token symbol' }],
            })(
              <Input placeholder="Symbol" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Name" >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input the token name' }],
            })(
              <Input placeholder="Token Name" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Contract Address">
            {getFieldDecorator('contractAddress', {
              rules: [{ required: true, message: 'Please input the contract address' }],
            })(
              <Input placeholder="Contract Address" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Decimal">
            {getFieldDecorator('decimal', {
              rules: [{ required: true, message: 'Please input the token decimal' }],
            })(
              <Input type="number" placeholder="Decimal" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Description">
            {getFieldDecorator('description', {
              rules: [],
            })(
              <Input placeholder="Description ( Optional )" />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>{' '}
            <Button type="default" onClick={this.handleCancel}>
              Cancel
            </Button>
          </FormItem>
        </Form>
        <Divider>Add Token</Divider>
      </Div>
    );
  }
}

TokenChooserAddForm.propTypes = {
  form: PropTypes.object,
  onSubmitNewToken: PropTypes.func,
  onHideTokenForm: PropTypes.func,
};

const WrappedTokenChooserAddForm = Form.create()(TokenChooserAddForm);

export default WrappedTokenChooserAddForm;

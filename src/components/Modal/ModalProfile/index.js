import React, { useState } from "react";
import { Form, Input, Tooltip, Select, Checkbox, Button } from "antd";
import { InputMail, ButtonMail, ButtonApplyPass } from "./style";

const ModalProfile = ({ firstName, lastName, userName, email }) => {
  const [changePassword, setChangePassword] = useState(false);
  const showInput = () => {
    setChangePassword(!changePassword);
  };

  return (
    <div>
      <Form name="profile" scrollToFirstError>
        <Form.Item name="firstName" label="First Name">
          <Input defaultValue={firstName} />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input defaultValue={lastName} />
        </Form.Item>

        <Form.Item name="Name User" label="Name User">
          <Input defaultValue={userName} disabled />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <InputMail defaultValue={email} />
          <ButtonMail htmlType="button">Check Mail</ButtonMail>
        </Form.Item>
        <Form.Item>
          {changePassword ? (
            <Form>
              <Form.Item
                name="OldPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Old password!",
                  },
                ]}
              >
                <Input.Password placeholder="Old Password" />
              </Form.Item>

              <Form.Item
                name="NewPassword"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input your New password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("OldPassword") === value) {
                        return Promise.reject(
                          "New password cannot be the same as your old password"
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>

              <Form.Item
                name="ConfirmPassword"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("NewPassword") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Old Password" />
              </Form.Item>

              <ButtonApplyPass type="primary">Apply Change</ButtonApplyPass>
              <Button
                htmlType="button"
                type="dashed"
                danger
                onClick={showInput}
              >
                Cancel
              </Button>
            </Form>
          ) : (
            <Button htmlType="button" onClick={showInput}>
              Change your password
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default ModalProfile;

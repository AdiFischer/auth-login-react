import { Button, Form, Input, Layout } from 'antd'

export default function Profile({ user, token, setUser }) {
    const handleProfileUpdate = (values) => {
        fetch(`http://localhost:3030/users/${user.uid}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(() => alert("Profile updated!"))
            .catch(alert)
    }
    return (
        <Layout.Content style={{ padding: '50px' }}>
            <h1>Profile</h1>
            <Form
                onFinish={handleProfileUpdate}
                initialValues={user}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                    <Button type='primary' htmlType='submit'>Save</Button>
                </Form.Item>
            </Form>
        </Layout.Content>

    )
}

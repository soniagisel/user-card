import React from 'react'
import './index.scss'
import App from './App'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { userApi } from './services/user-service'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <ApiProvider api={userApi}>
            <App />
        </ApiProvider>
    </React.StrictMode>,
)

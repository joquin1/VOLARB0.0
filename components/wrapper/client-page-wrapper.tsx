"use client"

import PageWrapper from "./page-wrapper"

interface ClientPageWrapperProps {
  children: React.ReactNode
}

export function ClientPageWrapper({ children }: ClientPageWrapperProps) {
  return <PageWrapper>{children}</PageWrapper>
} 
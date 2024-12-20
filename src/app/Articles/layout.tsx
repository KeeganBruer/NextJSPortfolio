import React from "react";
import PageWrapper from "@/Components/PageWrapper";
import PageConstraint from "@/Components/PageConstraint";
import NavBar from "@/Components/NavBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <PageWrapper>
            <NavBar />
            {children}
        </PageWrapper>
    )
}
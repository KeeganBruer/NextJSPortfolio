import React from "react";
import PageWrapper from "@/Components/PageWrapper";
import PageConstraint from "@/Components/PageConstraint";
import "./article.css"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <div className="mt-[50px]"></div>
            <PageConstraint id={"ArticleWrapper"}>
                {children}
            </PageConstraint>
            <div className="h-[100px]"></div>
        </>
    )
}
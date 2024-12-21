import PageConstraint from "@/Components/PageConstraint";
import PageWrapper from "@/Components/PageWrapper";
import { CONSTANTS } from "@/Constants";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Meal Sync",
    description: "Meals are a corner-stone of community, Everyone Eats. MealSync focuses on bringing more collaboration to the dinner-making process.",
    openGraph: {
        type:"website",
        title: "Meal Sync",
        description: "Meals are a corner-stone of community, Everyone Eats. MealSync focuses on bringing more collaboration to the dinner-making process.",
        url: "https://keeganbruer.com/MealSync",
        images: [
            {
                url: `${CONSTANTS.BASE_URL}/MealSync_Social_Cover.png`,
                width: 1200,
                height: 627
            }
        ]
    }
  };
export default function MealSync() {
    return (
        <PageWrapper color="#3C8864">
            <div style={{height:100}}></div>
            <Image
                alt="Meal Sync Icon"
                src="/project_covers/mealsync/icon.png"
                width={150} height={150}
                style={{ borderRadius: 300, position:"relative", zIndex:1, backgroundColor:"#3C8864", border: "1px solid black", marginBottom:-50 }}
            ></Image>
            <PageConstraint>
                <div style={{
                    width: "100%", display: "flex", flexDirection: "column", color: "white", backgroundColor: "#363636",
                    padding: 20, paddingTop: 60,
                    
                }}>
                    <h1
                        className="font-bold w-full text-center"
                        style={{ fontSize:50, color: "white",textShadow: "0 0 3px #000000, 0 0 5px #000000" }}
                    >MEAL SYNC</h1>

                    <p>
                        Meals are a corner-stone of community, &quot;Everyone Eats&quot;.
                        MealSync focuses on bringing more collaboration to the dinner-making process.
                        MealSync achieves better collaboration through easily-sharable recipes,
                        shared meal plans, and real-time grocery lists (for those simultaneous multi-store shopping trips).
                    </p>

                    <h3 className="text-xl font-bold pb-3 pt-10">Has MealSync been released yet?</h3>
                    <p>
                        Not yet,
                        to be approved for publishing on the Google Play Store, we have to run a closed test
                        with a minimum of 12 testers who have been opted-in for at least 14 days continuously.
                    </p>
                    <p className="pt-3">
                        MealSync will hold its closed test from January 20th - Febuary 7th.
                    </p>
                    <p className="pt-3 font-bold">
                        If you are interested in participating in the closed beta. Email inquire@keeganbruer.com
                    </p>

                    <h3 className="text-xl font-bold pb-3 pt-10">Will MealSync be available on IOS?</h3>
                    <p>
                        MealSync is coming to android in early January 2025, but getting on the Apple App Store will take a little longer.
                        But the good news, MealSync is already IOS compatible! So once we secure and validate the funding for app store registration,
                        <span className="font-bold"> Meal Sync will be coming to IOS</span> 
                    </p>
                    <h3 className="text-xl font-bold pt-10">What are the main features?</h3>
                    <div style={{paddingLeft:20}}>
                        <h4 className="font-bold pb-3 pt-5">Recipes</h4>
                        <p>
                        MealSync&apos;s core revolves around storing and managing your recipes.
                        </p>
                        <h4 className="font-bold pb-3 pt-5">Meal Planning</h4>
                        <p>
                            MealSync helps plan meals for families of all sizes, from solo cooks to large households.
                            Gone are the days of hearing, &quot;What&apos;s for dinner?&quot; MealSync makes meal planning a collaborative effort,
                            so everyone can have input.
                        </p>
                        <h4 className="font-bold pb-3 pt-5">Community</h4>
                        <p>
                            I&apos;ve said it before, Meals are a corner-stone of community: &quot;Everyone Eats&quot;.
                            MealSync bolsters collaboration through easily-sharable recipes, shared meal plans, and real-time grocery lists (for those simultaneous
                            multi-store shopping trips).
                        </p>
                    </div>
                    
                    <h3 className="text-xl font-bold pb-3 pt-10">How is MealSync Different?</h3>
                    <p>
                        MealSync is local-first while still offering features to backup, share and connect.
                        A major benefit of our local-first model is that MealSync is one of the only apps offering
                        an unlimited number of free local recipes.
                    </p>
                    <div className="w-full flex justify-between pt-5">
                        <h3 className="text-xl font-bold">Release Plan</h3>
                        <span className="font-bold">Pre-Release</span>
                    </div>
                    <div style={{ paddingLeft: 20 }}>
                        
                        <h4 className="font-bold text-lg pt-5">Stage 1 - Beta Release</h4>
                        <div className="w-full font-bold flex justify-between pb-3">
                            <span>(Android)</span>
                            <span>January 20th</span>
                        </div>
                        <p>
                            The App will release in a semi-finished stage that focuses on the local-first features. 
                            To be approved for publishing on the Google Play Store, we have to run a closed test
                            with a minimum of 12 testers who have been opted-in for at least 14 days continuously.

                        </p>
                        <p className="pt-3">
                            MealSync will hold its closed test from January 20th - Febuary 7th.
                        </p>
                        <p className="pt-3">
                            If you are interested in participating in the closed beta. Email inquire@keeganbruer.com
                        </p>
                        <h4 className="font-bold text-lg pt-5">Stage 2 - Local-Only With Ads</h4>
                        <div className="w-full font-bold flex justify-between pb-3">
                            <span>(Android)</span>
                            <span>Febuary 10th</span>
                        </div>
                        <p>
                            Once the closed test is completed, MealSync will be publicly released on Android with Local-Only features.
                            The lack of server costs plus the addition of Ads will help start the initial app funds.
                        </p>
                        <h4 className="font-bold text-lg pt-5">Stage 3 - Account Integration & Funding</h4>
                        <div className="w-full font-bold flex justify-between pb-3">
                            <span>(Android)</span>
                            <span>TBD</span>
                        </div>
                        <p>
                            Based on the success of the first stage, Account integration (as well as user-feedback) will be integrated.
                            Accounts will start with a free-tier, and a premium tier. The premium tier, along with the Ads,
                            will be used to support the server costs of the app and build towards funding the
                            Apple App Store Registration Fee.
                        </p>
                        <h4 className="font-bold text-lg pt-5">Stage 4 - IOS Release</h4>
                        <div className="w-full font-bold flex justify-between pb-3">
                            <span>(IOS & Android)</span>
                            <span>TBD</span>
                        </div>
                        <p>
                            Once the app has secured the funding for the yearly Apple App Store Registration Fee, an IOS version of the app 
                            will be released.
                        </p>
                        <h4 className="font-bold text-lg pt-5">Stage 5 - Full Release</h4>
                        <div className="w-full font-bold flex justify-between pb-3">
                            <span>(IOS & Android)</span>
                            <span>TBD</span>
                        </div>
                        <p>
                            The full release will include final adjustments based on user feedback, enhanced usability, and design improvements.
                        </p>
                    </div>
                    
                    
                </div>
            </PageConstraint>
            <div style={{height:100}}></div>
        </PageWrapper>
    )
}
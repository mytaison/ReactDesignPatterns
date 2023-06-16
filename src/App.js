// LAYOUT COMPONENTS
// SPLIT SCREEN
// ----------------------------------------------------
// import { SplitScreen } from "./SplitScreen";

// const LeftHandComponent = () => <h1>Left!</h1>;
// const RightHandComponent = () => <h1>Right!</h1>;

// function App() {
//   return (
//    Not Recommanded
//     <SplitScreen
//       left={LeftHandComponent}
//       right={RightHandComponent}
//       leftWeight={1}
//       rightWeight={3}
//     />
//    Recommanded
//     <SplitScreen leftWeight={1} rightWeight={3}>
//       <LeftHandComponent />
//       <RightHandComponent />
//     </SplitScreen>
//   );
// }

// export default App;

// LIST AND LIST ITEMS
// ----------------------------------------------------
// import { RegularList } from "./RegularList";
// import { Modal } from "./modal";
// import { LargePersonListItem } from "./people/LargePersonListItem";
// import { SmallPersonListItem } from "./people/SmallPersonListItem";
// import { LargeProductListItem } from "./product/LargeProductListItem";
// import { SmallProductListItem } from "./product/SmallProductListItem";
// const people = [
//   {
//     name: "Mehedi Hasan",
//     age: 29,
//     haircolor: "black",
//     hobbies: ["gaming", "drawing"],
//   },
//   {
//     name: "Adnan Kamal",
//     age: 29,
//     haircolor: "gray",
//     hobbies: ["flirting", "sexting", "playing guitar"],
//   },
//   {
//     name: "Shoaib Islam",
//     age: 29,
//     haircolor: "brown",
//     hobbies: ["stalking", "chickproducing", "spying"],
//   },
// ];

// const products = [
//   {
//     name: "Xbox Series X",
//     price: "500$",
//     description: "Microsoft next-gen Xbox Series X",
//     rating: 4.8,
//   },
//   {
//     name: "Xbox Series S",
//     price: "300$",
//     description: "Microsoft next-gen Xbox Series S",
//     rating: 5,
//   },
//   {
//     name: "Sony PS5",
//     price: "600$",
//     description: "Sony next-gen PlayStation 5",
//     rating: 5,
//   },
// ];

// function App() {
//   return (
//     <>
//         <RegularList
//           items={people}
//           resourceName="person"
//           itemComponent={SmallPersonListItem}
//         />
//         <RegularList
//           items={people}
//           resourceName="person"
//           itemComponent={LargePersonListItem}
//         />
//         <RegularList
//           items={products}
//           resourceName="product"
//           itemComponent={SmallProductListItem}
//         />
//         <RegularList
//           items={products}
//           resourceName="product"
//           itemComponent={LargeProductListItem}
//         />
//       <Modal>
//         <LargeProductListItem product={products[0]}></LargeProductListItem>
//       </Modal>
//     </>
//   );
// }

// export default App;

// MODAL
// ----------------------------------------------------
// import { Modal } from "./modal";
// import { LargeProductListItem } from "./product/LargeProductListItem";
// function App() {
//   return (
//     <>
//       <Modal>
//         <LargeProductListItem product={products[0]}></LargeProductListItem>
//       </Modal>
//     </>
//   );
// }

// export default App;

// CONTAINER COMPONENTS
// -----------------------------------------------------
// import { CurrentUserLoader } from "./CurrentUserLoader";
// import { UserInfo } from "./UserInfo";
// import { ProductInfo } from "./ProductInfo";
// import { UserLoader } from "./UserLoader";
// import { ResourceLoader } from "./ResourceLoader";
// import { DataSource } from "./DataSource";
// import axios from "axios";
// const getServerData = (url) => async () => {
//   const response = await axios.get(url);
//   return response.data;
// };
// const getLocalStorageData = (key) => async () => {
//   return await localStorage.getItem(key);
// };
// const Text = ({ message }) => <h1>{message}</h1>;

// function App() {
//   return (
//     <>
//       {/* <CurrentUserLoader>
//         <UserInfo></UserInfo>
//       </CurrentUserLoader>
//       <UserLoader userId={1234}>
//         <UserInfo></UserInfo>
//       </UserLoader>
//       <UserLoader userId={3456}>
//         <UserInfo></UserInfo>
//       </UserLoader>
//       <UserLoader userId={2345}>
//         <UserInfo></UserInfo>
//       </UserLoader> */}
//       {/* <ResourceLoader resourceUrl="/users/1234" resourceName="user">
//         <UserInfo></UserInfo>
//       </ResourceLoader>
//       <ResourceLoader resourceUrl="/products/123" resourceName="product">
//         <ProductInfo></ProductInfo>
//       </ResourceLoader> */}

//       {/* <DataSource
//         getDataFunc={getServerData("/users/1234")}
//         resourceName="user"
//       >
//         <UserInfo></UserInfo>
//       </DataSource>
//       <DataSource
//         getDataFunc={getLocalStorageData("message")}
//         resourceName="message"
//       >
//         <Text></Text>
//       </DataSource> */}
//     </>
//   );
// }
// export default App;

// UNCONTROLLED COMPONENTS
// ------------------------------------------------------
// import { UncontrolledForm } from "./UncontrolledForms";

// function App() {
//   return (
//     <>
//       <UncontrolledForm />
//     </>
//   );
// }
// export default App;

// CONTROLLED COMPONENTS
// ------------------------------------------------------
// import { ControlledForm } from "./ControlledForms";

// function App() {
//   return (
//     <>
//       <ControlledForm />
//     </>
//   );
// }
// export default App;

// CONTROLLED MODAL
// ------------------------------------------------------
// import { useState } from "react";
// import { ControlledModal } from "./ControlledModal";
// function App() {
//   const [shouldShowModal, setShouldShowModal] = useState(false);
//   function requestClose() {
//     setShouldShowModal(false);
//   }
//   return (
//     <>
//       <ControlledModal
//         shouldShow={shouldShowModal}
//         onRequestClose={requestClose}
//       >
//         <h3>Click Close to clode the modal</h3>
//       </ControlledModal>
//       <button
//         onClick={() => {
//           setShouldShowModal(!shouldShowModal);
//         }}
//       >
//         {shouldShowModal ? "Hide modal" : "Show modal"}
//       </button>
//     </>
//   );
// }
// export default App;

// UNCONTROLLED ONBOARDING FLOWS
// -----------------------------------------------------------
// import { useState } from "react";
// import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

// const StepOne = ({ goToNext, goToPrevious }) => (
//   <>
//     <h1>Step 1</h1>
//     <button onClick={() => goToNext({ name: "Mehedi Hasan" })}>Next</button>
//   </>
// );
// const StepTwo = ({ goToNext, goToPrevious }) => (
//   <>
//     <h1>Step 2</h1>
//     <button onClick={goToPrevious}>Previous</button>
//     <button onClick={() => goToNext({ age: 29 })}>Next</button>
//   </>
// );
// const StepThree = ({ goToNext, goToPrevious }) => (
//   <>
//     <h1>Step 3</h1>
//     <button onClick={goToPrevious}>Previous</button>
//     <button onClick={() => goToNext({ country: "Bangladesh" })}>Next</button>
//   </>
// );

// function App() {
//   return (
//     <UncontrolledOnboardingFlow
//       onFinish={(data) => {
//         console.log(data);
//         alert(data);
//       }}
//     >
//       <StepOne></StepOne>
//       <StepTwo></StepTwo>
//       <StepThree></StepThree>
//     </UncontrolledOnboardingFlow>
//   );
// }
// export default App;

// CONTROLLED ONBOARDING FLOWS
// ----------------------------------------------------------------
// import { useState } from "react";
// import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

// const StepOne = ({ goToNext }) => (
//   <>
//     <h1>Step 1</h1>
//     <button onClick={() => goToNext({ name: "Mehedi Hasan" })}>Next</button>
//   </>
// );
// const StepTwo = ({ goToNext, goToPrevious }) => (
//   <>
//     <h1>Step 2</h1>
//     <button onClick={goToPrevious}>Previous</button>
//     <button onClick={() => goToNext({ age: 29 })}>Next</button>
//   </>
// );
// const StepYoung = ({ goToNext, goToPrevious }) => (
//   <>
//     <h1>Step : Bonus</h1>
//     <p>Congratulations! You are eligible for additional point category</p>
//     <button onClick={goToPrevious}>Previous</button>
//     <button onClick={() => goToNext({ country: "Bangladesh" })}>Next</button>
//   </>
// );
// const StepThree = ({ goToNext, goToPrevious }) => (
//   <>
//     <h1>Step 3</h1>
//     <button onClick={goToPrevious}>Previous</button>
//     <button onClick={() => goToNext({ country: "Bangladesh" })}>Next</button>
//   </>
// );

// function App() {
//   const [onboardingData, setOnboardingData] = useState({});
//   const [currnetIndex, setCurrentIndex] = useState(0);

//   const onNext = (stepData) => {
//     const updatedData = {
//       ...onboardingData,
//       ...stepData,
//     };
//     const nextIndex = currnetIndex + 1;
//     setOnboardingData(updatedData);
//     setCurrentIndex(nextIndex);
//     console.log(updatedData);
//   };

//   const onPrevious = (stepData) => {
//     const previousIndex = currnetIndex - 1;
//     const updatedData = {
//       ...onboardingData,
//       ...stepData,
//     };
//     setOnboardingData(updatedData);
//     if (previousIndex >= 0) {
//       setCurrentIndex(previousIndex);
//     }
//     console.log(updatedData);
//   };

//   return (
//     <ControlledOnboardingFlow
//       onFinish={(data) => {
//         console.log(data);
//         alert(data);
//       }}
//       currnetIndex={currnetIndex}
//       onNext={onNext}
//       onPrevious={onPrevious}
//     >
//       <StepOne></StepOne>
//       <StepTwo></StepTwo>
//       {onboardingData.age < 35 && <StepYoung></StepYoung>}
//       <StepThree></StepThree>
//     </ControlledOnboardingFlow>
//   );
// }
// export default App;

// HIGHER ORDER COMPONENTS
// ------------------------------------------
// import { printProps } from "./HOC/printProps";
// // const UserInfoWrapped = printProps(UserInfo);

// import { withUser } from "./HOC/withUser";
// import { UserInfo } from "./UserInfo";
// const UserInfoWithLoader = withUser(UserInfo, "2345");

// import { UserInfoForm } from "./UserInfoForm";
// import { UserInfoFormForResource } from "./UserInfoForm";
// function App() {
//   return (
//     <>
//       {/* <UserInfoWrapped a={1} b={"Hello!"} c={"Mehedi"}></UserInfoWrapped> */}
//       {/* <UserInfoWithLoader /> */}
//       <UserInfoForm />
//       <br />
//       <br />
//       <UserInfoFormForResource />
//     </>
//   );
// }
// export default App;

// CUSTOM HOOKS
// -------------------------------------------
// import { ProductInfoCustomHook } from "./ProductInfoCustomHook";
// import { UserInfoCustomHook } from "./UserInfoCustomHook";
// import { UserInfoCustomHook2 } from "./UserInfoCustomHook2";
// import { UserInfoCustomHook3 } from "./UserInfoCustomHook3";
// function App() {
//   return (
//     <>
//       {/* <UserInfoCustomHook /> */}
//       {/* <UserInfoCustomHook2 userId={1234} /> */}
//       {/* <UserInfoCustomHook2 userId={2345} /> */}
//       {/* <ProductInfoCustomHook productId={123} /> */}
//       {/* <ProductInfoCustomHook productId={234} /> */}
//       <UserInfoCustomHook3 userId={1234} />
//     </>
//   );
// }
// export default App;

// FUNCTIONAL PROGRAMMING AND REACT
// import { RecursiveComponent } from "./FunctionalProgramming/RecursiveComponent";
// const nestedObject = {
//   a: 1,
//   b: {
//     b1: 4,
//     b2: {
//       b23: "Hello",
//     },
//     b3: {
//       b31: {
//         message: "Hi",
//       },
//       b32: {
//         message: "Hi",
//       },
//     },
//   },
//   c: {
//     c1: 2,
//     c2: 3,
//   },
// };
// function App() {
//   return (
//     <>
//       <h1>Functional Programming</h1>
//       <h2>Recursive Component</h2>
//       <RecursiveComponent data={nestedObject} />
//     </>
//   );
// }
// export default App;

// import {
//   DangerButton,
//   SuccessButton,
// } from "./FunctionalProgramming/CompositionComponent";
// function App() {
//   return (
//     <>
//       <h1>Functional Programming</h1>
//       <h2>Composition Component</h2>
//       <SuccessButton key="success"></SuccessButton>
//       <DangerButton key="danger"></DangerButton>
//     </>
//   );
// }
// export default App;

import { DangerBtn, SuccessBtn } from "./FunctionalProgramming/partiallyApply";
function App() {
  return (
    <>
      <h1>Functional Programming</h1>
      <h2>Partially Applied Component</h2>
      <SuccessBtn key="success"></SuccessBtn>
      <DangerBtn key="danger"></DangerBtn>
    </>
  );
}
export default App;

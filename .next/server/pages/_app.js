/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AppContext.js":
/*!************************************!*\
  !*** ./src/contexts/AppContext.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppContextProvider: () => (/* binding */ AppContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useAppContext: () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AppContextProvider = ({ children })=>{\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [actualQuestionAnswers, setActualQuestionAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [anwersLoading, setAnswersLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [userAnswers, setUserAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const BASE_URL = ``;\n    const getQuestions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        setLoading(true);\n        try {} catch (error) {\n            console.log(error);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getQuestions();\n    }, [\n        getQuestions\n    ]);\n    const getAnsewers = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (questionId)=>{\n        setActualQuestionAnswers([]);\n        setAnswersLoading(true);\n        try {} catch (error) {\n            console.log(\"ERROR NO EXISTE SHOW\");\n        }\n    }, []);\n    const questionDataById = (id)=>questions.find((question)=>question.id === parseInt(id) && question);\n    const handleStep = (action)=>{\n        switch(action){\n            case `prev`:\n                if (step > 0) {\n                    setStep(step - 1);\n                    router.push(`/question/${questions[step - 1]?.id}`);\n                }\n                break;\n            case `next`:\n                if (step < questions.length - 1) {\n                    setStep(step + 1);\n                    router.push(`/question/${questions[step + 1]?.id}`);\n                }\n                break;\n            case `resume`:\n                router.push(`/resume`);\n                break;\n            default:\n                break;\n        }\n    };\n    const handleSetAnswer = (answer)=>{};\n    const handleResume = ()=>{\n    // const resumeItems = \n    // return resumeItems;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            questions,\n            loading,\n            getQuestions,\n            getAnsewers,\n            anwersLoading,\n            actualQuestionAnswers,\n            questionDataById,\n            handleStep,\n            step,\n            handleSetAnswer,\n            handleResume\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/leanamaro/Documents/Maimonides/Prog 3/Finales/2023-dic-trivia/trivia-frontend-blank/src/contexts/AppContext.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAppContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n    if (!context) {\n        throw new Error(\"useAppContexts must be used within a AppContextProvider\");\n    }\n    return context;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9BcHBDb250ZXh0LmpzPzM0MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlQ29udGV4dCxcbiAgdXNlQ2FsbGJhY2ssXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBpbnNlcnRJbkFycmF5IH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW2FjdHVhbFF1ZXN0aW9uQW5zd2Vycywgc2V0QWN0dWFsUXVlc3Rpb25BbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fud2Vyc0xvYWRpbmcsIHNldEFuc3dlcnNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFt1c2VyQW5zd2Vycywgc2V0VXNlckFuc3dlcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IEJBU0VfVVJMID0gYGA7XG5cbiAgY29uc3QgZ2V0UXVlc3Rpb25zID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRRdWVzdGlvbnMoKTtcbiAgfSwgW2dldFF1ZXN0aW9uc10pO1xuXG4gIGNvbnN0IGdldEFuc2V3ZXJzID0gdXNlQ2FsbGJhY2soYXN5bmMgKHF1ZXN0aW9uSWQpID0+IHtcbiAgICBzZXRBY3R1YWxRdWVzdGlvbkFuc3dlcnMoW10pO1xuICAgIHNldEFuc3dlcnNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBOTyBFWElTVEUgU0hPV1wiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBxdWVzdGlvbkRhdGFCeUlkID0gKGlkKSA9PlxuICAgIHF1ZXN0aW9ucy5maW5kKChxdWVzdGlvbikgPT4gcXVlc3Rpb24uaWQgPT09IHBhcnNlSW50KGlkKSAmJiBxdWVzdGlvbik7XG5cbiAgY29uc3QgaGFuZGxlU3RlcCA9IChhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSBgcHJldmA6XG4gICAgICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICAgIHNldFN0ZXAoc3RlcCAtIDEpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKGAvcXVlc3Rpb24vJHtxdWVzdGlvbnNbc3RlcCAtIDFdPy5pZH1gKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYG5leHRgOlxuICAgICAgICBpZiAoc3RlcCA8IHF1ZXN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgc2V0U3RlcChzdGVwICsgMSk7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC9xdWVzdGlvbi8ke3F1ZXN0aW9uc1tzdGVwICsgMV0/LmlkfWApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBgcmVzdW1lYDpcbiAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bWVgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2V0QW5zd2VyID0gKGFuc3dlcikgPT4ge1xuICAgIFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc3VtZSA9ICgpID0+IHtcbiAgICAvLyBjb25zdCByZXN1bWVJdGVtcyA9IFxuICAgIC8vIHJldHVybiByZXN1bWVJdGVtcztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBxdWVzdGlvbnMsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGdldFF1ZXN0aW9ucyxcbiAgICAgICAgZ2V0QW5zZXdlcnMsXG4gICAgICAgIGFud2Vyc0xvYWRpbmcsXG4gICAgICAgIGFjdHVhbFF1ZXN0aW9uQW5zd2VycyxcbiAgICAgICAgcXVlc3Rpb25EYXRhQnlJZCxcbiAgICAgICAgaGFuZGxlU3RlcCxcbiAgICAgICAgc3RlcCxcbiAgICAgICAgaGFuZGxlU2V0QW5zd2VyLFxuICAgICAgICBoYW5kbGVSZXN1bWUsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXBwQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUFwcENvbnRleHRzIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBBcHBDb250ZXh0UHJvdmlkZXJcIik7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwidXNlUm91dGVyIiwiaW5zZXJ0SW5BcnJheSIsIkFwcENvbnRleHQiLCJBcHBDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RlcCIsInNldFN0ZXAiLCJhY3R1YWxRdWVzdGlvbkFuc3dlcnMiLCJzZXRBY3R1YWxRdWVzdGlvbkFuc3dlcnMiLCJhbndlcnNMb2FkaW5nIiwic2V0QW5zd2Vyc0xvYWRpbmciLCJ1c2VyQW5zd2VycyIsInNldFVzZXJBbnN3ZXJzIiwicm91dGVyIiwiQkFTRV9VUkwiLCJnZXRRdWVzdGlvbnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRBbnNld2VycyIsInF1ZXN0aW9uSWQiLCJxdWVzdGlvbkRhdGFCeUlkIiwiaWQiLCJmaW5kIiwicXVlc3Rpb24iLCJwYXJzZUludCIsImhhbmRsZVN0ZXAiLCJhY3Rpb24iLCJwdXNoIiwibGVuZ3RoIiwiaGFuZGxlU2V0QW5zd2VyIiwiYW5zd2VyIiwiaGFuZGxlUmVzdW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUFwcENvbnRleHQiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AppContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/AppContext */ \"./src/contexts/AppContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__]);\n_contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/leanamaro/Documents/Maimonides/Prog 3/Finales/2023-dic-trivia/trivia-frontend-blank/src/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/leanamaro/Documents/Maimonides/Prog 3/Finales/2023-dic-trivia/trivia-frontend-blank/src/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQzdCO0FBRWYsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsb0VBQWtCQTtrQkFDakIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcENvbnRleHRQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHRzL0FwcENvbnRleHRcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBwQ29udGV4dFByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFwcENvbnRleHRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   insertInArray: () => (/* binding */ insertInArray)\n/* harmony export */ });\nconst insertInArray = (originalArray, position, element)=>[\n        ...originalArray.slice(0, position),\n        element,\n        ...originalArray.slice(position + 1)\n    ];\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGdCQUFnQixDQUFDQyxlQUFlQyxVQUFVQyxVQUFZO1dBQ3ZERixjQUFjRyxLQUFLLENBQUMsR0FBR0Y7UUFDMUJDO1dBQ0dGLGNBQWNHLEtBQUssQ0FBQ0YsV0FBVztLQUNuQztBQUV3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1mcm9udGVuZC8uL3NyYy91dGlscy9pbmRleC5qcz9kNDI3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluc2VydEluQXJyYXkgPSAob3JpZ2luYWxBcnJheSwgcG9zaXRpb24sIGVsZW1lbnQpID0+IFtcbiAgLi4ub3JpZ2luYWxBcnJheS5zbGljZSgwLCBwb3NpdGlvbiksXG4gIGVsZW1lbnQsXG4gIC4uLm9yaWdpbmFsQXJyYXkuc2xpY2UocG9zaXRpb24gKyAxKSxcbl07XG5cbmV4cG9ydCB7IGluc2VydEluQXJyYXkgfTtcbiJdLCJuYW1lcyI6WyJpbnNlcnRJbkFycmF5Iiwib3JpZ2luYWxBcnJheSIsInBvc2l0aW9uIiwiZWxlbWVudCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/index.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();
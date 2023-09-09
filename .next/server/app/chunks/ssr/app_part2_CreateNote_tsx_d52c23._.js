(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_part2_CreateNote_tsx_d52c23._.js", {

"[project]/app/part2/Notes.module.css (css module, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "form": "form__Notes__a5309257",
  "formButton": "formButton__Notes__a5309257",
  "formDropdown": "formDropdown__Notes__a5309257",
  "formHeader": "formHeader__Notes__a5309257",
  "formInput": "formInput__Notes__a5309257",
  "formLabel": "formLabel__Notes__a5309257",
  "grid": "grid__Notes__a5309257",
  "note": "note__Notes__a5309257",
});

})()),
"[project]/app/part2/CreateNote.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>CreateNote
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/app/part2/Notes.module.css (css module, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
function CreateNote() {
    const [title, setTitle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]('');
    const [completed, setCompleted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [nValue, setNValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    const create = async ()=>{
        for(let i = 0; i < nValue; i++){
            await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    completed
                })
            });
        }
        setTitle('');
        setCompleted(false);
        setNValue(0);
        router.refresh();
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].form,
        onSubmit: create,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formHeader,
                children: "Form"
            }, void 0, false, {
                fileName: "<[project]/app/part2/CreateNote.tsx>",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formInput,
                type: "text",
                placeholder: "Write in your title",
                onChange: (e)=>setTitle(e.target.value)
            }, void 0, false, {
                fileName: "<[project]/app/part2/CreateNote.tsx>",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formInput,
                type: "number",
                placeholder: "Write in your n-value",
                onChange: (e)=>setNValue(Number(e.target.value))
            }, void 0, false, {
                fileName: "<[project]/app/part2/CreateNote.tsx>",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formLabel,
                htmlFor: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].true_false_dropdown,
                children: "Choose a value:"
            }, void 0, false, {
                fileName: "<[project]/app/part2/CreateNote.tsx>",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formDropdown,
                name: "trueFalse",
                id: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].true_false_dropdown,
                onChange: (e)=>setCompleted(e.target.value === 'true'),
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                        value: "true",
                        children: "True"
                    }, void 0, false, {
                        fileName: "<[project]/app/part2/CreateNote.tsx>",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                        value: "false",
                        children: "False"
                    }, void 0, false, {
                        fileName: "<[project]/app/part2/CreateNote.tsx>",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/part2/CreateNote.tsx>",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formButton,
                onClick: create,
                type: "button",
                children: "Submit"
            }, void 0, false, {
                fileName: "<[project]/app/part2/CreateNote.tsx>",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/part2/CreateNote.tsx>",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_part2_CreateNote_tsx_d52c23._.js.map
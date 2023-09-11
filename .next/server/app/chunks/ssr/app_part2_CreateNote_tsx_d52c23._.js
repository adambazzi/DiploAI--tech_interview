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
function CreateNote(props) {
    const [nValue, setNValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const { notes, setNotes } = props;
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    const get = async (e)=>{
        e.preventDefault();
        const updatedNotes = [];
        for(let i = 0; i < nValue; i++){
            const barNum = Math.floor(Math.random() * 100) + 1;
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${barNum}`, {
                method: 'GET'
            });
            if (response.ok) {
                const data = await response.json();
                updatedNotes.push(data);
            } else {
                console.error('Failed to fetch data:', response.status, response.statusText);
            }
        }
        setNotes(updatedNotes);
        setNValue(0);
        router.refresh();
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].form,
        onSubmit: get,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formHeader,
                children: "Form"
            }, void 0, false, {
                fileName: "<[project]/app/part2/CreateNote.tsx>",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formInput,
                type: "number",
                placeholder: "Write in your n-value",
                value: nValue,
                onChange: (e)=>setNValue(Number(e.target.value))
            }, void 0, false, {
                fileName: "<[project]/app/part2/CreateNote.tsx>",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formButton,
                onClick: get,
                type: "button",
                children: "Submit"
            }, void 0, false, {
                fileName: "<[project]/app/part2/CreateNote.tsx>",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/part2/CreateNote.tsx>",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_part2_CreateNote_tsx_d52c23._.js.map
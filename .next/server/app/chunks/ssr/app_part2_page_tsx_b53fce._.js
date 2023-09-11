(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_part2_page_tsx_b53fce._.js", {

"[project]/app/part2/Notes.module.css (css module, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

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
"[project]/app/part2/page.tsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>NotesPage,
    "getServerSideProps": ()=>getServerSideProps
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/app/part2/Notes.module.css (css module, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function NotesPage({ notes }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                children: "Notes"
            }, void 0, false, {
                fileName: "<[project]/app/part2/page.tsx>",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].grid,
                children: notes?.map((note)=>{
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](NoteComponent, {
                        note: note
                    }, note.id, false, {
                        fileName: "<[project]/app/part2/page.tsx>",
                        lineNumber: 17,
                        columnNumber: 18
                    }, this);
                })
            }, void 0, false, {
                fileName: "<[project]/app/part2/page.tsx>",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
                action: "",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].form,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formHeader,
                        children: "Form"
                    }, void 0, false, {
                        fileName: "<[project]/app/part2/page.tsx>",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formInput,
                        type: "number",
                        placeholder: "Write in your n-value"
                    }, void 0, false, {
                        fileName: "<[project]/app/part2/page.tsx>",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].formButton,
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "<[project]/app/part2/page.tsx>",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/part2/page.tsx>",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/part2/page.tsx>",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function NoteComponent({ note }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$part2$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].note,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: "Note"
            }, void 0, false, {
                fileName: "<[project]/app/part2/page.tsx>",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: [
                    "User ID: ",
                    note.userId
                ]
            }, void 0, true, {
                fileName: "<[project]/app/part2/page.tsx>",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: [
                    "ID: ",
                    note.id
                ]
            }, void 0, true, {
                fileName: "<[project]/app/part2/page.tsx>",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: [
                    "Title: ",
                    note.title
                ]
            }, void 0, true, {
                fileName: "<[project]/app/part2/page.tsx>",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: [
                    "Completed: ",
                    note.completed ? 'Yes' : 'No'
                ]
            }, void 0, true, {
                fileName: "<[project]/app/part2/page.tsx>",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/part2/page.tsx>",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
async function getServerSideProps(context) {
    'use server';
    const { n } = context.query;
    const maxID = 100;
    const ids = new Set();
    while(ids.size < Number(n)){
        ids.add(Math.floor(Math.random() * maxID) + 1);
    }
    const promises = Array.from(ids).map((id)=>fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            cache: 'no-cache'
        }).then((res)=>res.json()));
    const notes = await Promise.all(promises);
    return {
        props: {
            notes
        }
    };
}

})()),
}]);

//# sourceMappingURL=app_part2_page_tsx_b53fce._.js.map
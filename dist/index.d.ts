import * as ts from "typescript";
export interface ICompilerOptions {
    ignoreGenerics?: boolean;
    ignoreIndexSignature?: boolean;
    inlineImports?: boolean;
}
export declare class Compiler {
    private checker;
    private options;
    private topNode;
    static compile(filePath: string, options?: ICompilerOptions): string;
    private exportedNames;
    constructor(checker: ts.TypeChecker, options: ICompilerOptions, topNode: ts.SourceFile);
    private getName;
    private indent;
    private compileNode;
    private compileOptType;
    private _compileIdentifier;
    private _compileParameterDeclaration;
    private _compilePropertySignature;
    private _compileMethodSignature;
    private _compileTypeReferenceNode;
    private _compileFunctionTypeNode;
    private _compileTypeLiteralNode;
    private _compileArrayTypeNode;
    private _compileTupleTypeNode;
    private _compileUnionTypeNode;
    private _compileLiteralTypeNode;
    private _compileEnumDeclaration;
    private _compileInterfaceDeclaration;
    private _compileTypeAliasDeclaration;
    private _compileExpressionWithTypeArguments;
    private _compileParenthesizedTypeNode;
    private _compileImportDeclaration;
    private _compileSourceFileStatements;
    private _compileSourceFile;
    private _compileIndexSignatureDeclaration;
}
/**
 * Main entry point when used from the command line.
 */
export declare function main(): void;

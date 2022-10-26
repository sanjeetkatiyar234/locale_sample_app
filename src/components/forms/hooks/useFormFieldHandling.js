const useFormFieldHandling = (input,meta,rest) => ({
    ...input,
    error: meta?.touched && meta.error?.[0],
    ...rest,
});

export default useFormFieldHandling;
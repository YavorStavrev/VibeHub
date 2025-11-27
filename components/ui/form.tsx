"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
<<<<<<< HEAD
=======
  useFormState,
>>>>>>> main
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
=======
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>>>>>>> main
> = {
  name: TName
}

<<<<<<< HEAD
const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
=======
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>>>>>>> main
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
<<<<<<< HEAD
  const { getFieldState, formState } = useFormContext()
=======
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)
>>>>>>> main

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

<<<<<<< HEAD
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>")
  }

  const fieldState = getFieldState(fieldContext.name, formState)

=======
>>>>>>> main
  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

<<<<<<< HEAD
const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
=======
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
>>>>>>> main
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
<<<<<<< HEAD
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
=======
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
>>>>>>> main
  const { error, formItemId } = useFormField()

  return (
    <Label
<<<<<<< HEAD
      ref={ref}
      className={cn(error && "text-destructive", className)}
=======
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
>>>>>>> main
      htmlFor={formItemId}
      {...props}
    />
  )
<<<<<<< HEAD
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
=======
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
>>>>>>> main
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
<<<<<<< HEAD
      ref={ref}
=======
      data-slot="form-control"
>>>>>>> main
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
<<<<<<< HEAD
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
=======
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
>>>>>>> main
  const { formDescriptionId } = useFormField()

  return (
    <p
<<<<<<< HEAD
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : children
=======
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children
>>>>>>> main

  if (!body) {
    return null
  }

  return (
    <p
<<<<<<< HEAD
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
=======
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
>>>>>>> main
      {...props}
    >
      {body}
    </p>
  )
<<<<<<< HEAD
})
FormMessage.displayName = "FormMessage"
=======
}
>>>>>>> main

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

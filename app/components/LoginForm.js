import Button from './Button'
import TextInput from './TextInput'

export default function LoginForm() {
  return (
    <form>
      <header className="text-center mb-6 px-5">
        <h1 className="font-black tracking-wider text-2xl text-blue-600">
          Katalog
        </h1>
        <p className="font-medium text-sm">
          Inicia sesión para administrar tus productos
        </p>
      </header>
      <section className="flex flex-col gap-2 items-center">
        <TextInput label="Correo electrónico:" />
        <TextInput label="Contraseña" type="password" />
      </section>
      <footer className="flex justify-center mt-3">
        <Button type="submit">Iniciar sesión</Button>
      </footer>
    </form>
  )
}

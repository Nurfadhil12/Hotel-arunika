"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { hotel, rooms, whatsappLink } from "@/data/hotel";

const inputClass =
  "w-full rounded-sm border border-line bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-stone/60 transition-colors focus:border-jade focus:outline-none";

const labelClass =
  "mb-2 block text-[0.66rem] uppercase tracking-[0.22em] text-stone";

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const message = [
      `Halo ${hotel.shortName}, saya ingin memesan kamar.`,
      "",
      `Nama: ${get("nama")}`,
      `Email: ${get("email")}`,
      get("telepon") ? `Telepon: ${get("telepon")}` : "",
      `Check-in: ${get("checkin")}`,
      `Check-out: ${get("checkout")}`,
      `Jumlah tamu: ${get("tamu")}`,
      `Tipe kamar: ${get("kamar")}`,
      get("pesan") ? `Catatan: ${get("pesan")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="nama">
            Nama lengkap
          </label>
          <input
            id="nama"
            name="nama"
            required
            placeholder="Nama sesuai identitas"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="nama@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="telepon">
            Telepon / WhatsApp
          </label>
          <input
            id="telepon"
            name="telepon"
            placeholder="+62 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="tamu">
            Jumlah tamu
          </label>
          <select id="tamu" name="tamu" defaultValue="2" className={inputClass}>
            {["1", "2", "3", "4", "5+"].map((option) => (
              <option key={option} value={option}>
                {option} tamu
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="checkin">
            Check-in
          </label>
          <input
            id="checkin"
            name="checkin"
            type="date"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="checkout">
            Check-out
          </label>
          <input
            id="checkout"
            name="checkout"
            type="date"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="kamar">
          Tipe kamar
        </label>
        <select id="kamar" name="kamar" className={inputClass}>
          {rooms.map((room) => (
            <option key={room.slug} value={room.name}>
              {room.name}
            </option>
          ))}
          <option value="Belum diputuskan">Belum diputuskan</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="pesan">
          Permintaan khusus
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={4}
          placeholder="Contoh: kamar lantai atas, antar-jemput bandara pukul 14.00"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-stone">
          Formulir ini menyusun pesan reservasi lalu membukanya di WhatsApp.
          Situs demo tidak menyimpan data apa pun.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-jade px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.24em] text-sand transition-colors hover:bg-forest"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Kirim permintaan
        </button>
      </div>

      {sent ? (
        <p className="flex items-center gap-2 rounded-sm border border-jade/30 bg-jade/5 px-4 py-3 text-sm text-jade">
          <Icon name="check-circle" className="h-4 w-4" />
          Pesan reservasi dibuka di WhatsApp. Jika tab tidak terbuka, hubungi{" "}
          {hotel.whatsappDisplay}.
        </p>
      ) : null}
    </form>
  );
}

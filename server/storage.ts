import { type Animal, type InsertAnimal, type Contact, type InsertContact, animals, contacts } from "@shared/schema";
import { randomUUID } from "crypto";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";

export interface IStorage {
  getAllAnimals(): Promise<Animal[]>;
  getAnimalById(id: string): Promise<Animal | undefined>;
  createAnimal(animal: InsertAnimal): Promise<Animal>;
  
  getAllContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

// Database Storage usando PostgreSQL + Drizzle
export class DbStorage implements IStorage {
  private db;

  constructor() {
    const sql = neon(process.env.DATABASE_URL!);
    this.db = drizzle(sql);
    this.seedDataIfEmpty();
  }

  private async seedDataIfEmpty() {
    const existingAnimals = await this.db.select().from(animals).limit(1);
    
    if (existingAnimals.length === 0) {
      const sampleAnimals: InsertAnimal[] = this.getSampleAnimals();
      
      for (const animal of sampleAnimals) {
        await this.db.insert(animals).values(animal);
      }
    }
  }

  private getSampleAnimals(): InsertAnimal[] {
    return [
      {
        name: "Touro Nelore Premium",
        category: "bovinos",
        breed: "Nelore",
        age: 36,
        sex: "macho",
        weight: "650.00",
        price: "15000.00",
        description: "Touro Nelore de excelente genética, com características superiores de conformação e temperamento dócil. Ideal para reprodução e melhoramento de rebanho. Todos os exames veterinários em dia e certificado de origem.",
        imageUrl: "/generated_images/Premium_Nelore_bull_photo_78bd7ae3.png",
        featured: "yes",
        color: "cinza claro",
        height: "155.00",
      },
      {
        name: "Cavalo Quarto de Milha",
        category: "equinos",
        breed: "Quarter Horse",
        age: 48,
        sex: "macho",
        weight: "480.00",
        price: "25000.00",
        description: "Cavalo Quarto de Milha com excelente linhagem, treinado para trabalho com gado. Dócil, saudável e com toda documentação. Ideal para lida campeira e provas de rédeas.",
        imageUrl: "/generated_images/Quarter_horse_professional_photo_a58a4a2a.png",
        featured: "yes",
        color: "alazão",
        height: "152.00",
      },
      {
        name: "Ovelhas Dorper",
        category: "ovinos",
        breed: "Dorper",
        age: 24,
        sex: "fêmea",
        weight: "65.00",
        price: "1800.00",
        description: "Lote de ovelhas da raça Dorper, conhecidas pela excelente qualidade de carne e resistência. Animais saudáveis, com boa genética e prontos para reprodução. Ótima opção para produtores de carne ovina.",
        imageUrl: "/generated_images/White_sheep_flock_photo_d17c79a7.png",
        featured: "yes",
        color: "branca e preta",
      },
      {
        name: "Vaca Angus",
        category: "bovinos",
        breed: "Angus",
        age: 30,
        sex: "fêmea",
        weight: "520.00",
        price: "12000.00",
        description: "Vaca Angus de primeira qualidade, com histórico comprovado de produção. Excelente para cruzamento industrial e produção de carne nobre. Mansos e bem adaptados ao clima brasileiro.",
        imageUrl: "/generated_images/Angus_cattle_photo_8010e123.png",
        featured: "no",
        color: "preta",
        height: "140.00",
      },
      {
        name: "Cabras Leiteiras",
        category: "caprinos",
        breed: "Saanen",
        age: 18,
        sex: "fêmea",
        weight: "55.00",
        price: "1500.00",
        description: "Cabras leiteiras da raça Saanen, excelentes produtoras de leite de alta qualidade. Animais dóceis, com boa genética e manejo sanitário rigoroso. Perfeitas para produção de leite e derivados.",
        imageUrl: "/generated_images/Dairy_goats_photo_f8ec5122.png",
        featured: "no",
        color: "branca",
      },
      {
        name: "Novilho Nelore",
        category: "bovinos",
        breed: "Nelore",
        age: 18,
        sex: "macho",
        weight: "380.00",
        price: "6500.00",
        description: "Novilho Nelore jovem com excelente desenvolvimento e ganho de peso. Criado a pasto com suplementação mineral. Ideal para engorda ou sistema de cria. Documentação completa.",
        imageUrl: "/generated_images/Premium_Nelore_bull_photo_78bd7ae3.png",
        featured: "no",
        color: "cinza",
        height: "135.00",
      },
      {
        name: "Égua Mangalarga",
        category: "equinos",
        breed: "Mangalarga Marchador",
        age: 60,
        sex: "fêmea",
        weight: "420.00",
        price: "18000.00",
        description: "Égua Mangalarga Marchador com excelente marcha e genética comprovada. Mansa, saudável e com registro na ABCCMM. Ideal para reprodução e cavalgadas. Temperamento dócil e equilibrado.",
        imageUrl: "/generated_images/Quarter_horse_professional_photo_a58a4a2a.png",
        featured: "no",
        color: "castanha",
        height: "148.00",
      },
      {
        name: "Carneiros Dorper",
        category: "ovinos",
        breed: "Dorper",
        age: 20,
        sex: "macho",
        weight: "85.00",
        price: "2500.00",
        description: "Carneiros Dorper de alta qualidade genética para reprodução. Animais robustos, com excelente conformação e resistência. Ideais para melhoramento de rebanho ovino de corte.",
        imageUrl: "/generated_images/White_sheep_flock_photo_d17c79a7.png",
        featured: "no",
        color: "branca e preta",
      },
      {
        name: "Bode Anglo-Nubiano",
        category: "caprinos",
        breed: "Anglo-Nubiano",
        age: 24,
        sex: "macho",
        weight: "75.00",
        price: "2200.00",
        description: "Bode reprodutor da raça Anglo-Nubiana, conhecido pela dupla aptidão (leite e carne). Excelente genética, dócil e com todos os cuidados sanitários em dia. Ótima opção para melhoramento de plantel.",
        imageUrl: "/generated_images/Dairy_goats_photo_f8ec5122.png",
        featured: "no",
        color: "caramelo",
      },
    ];
  }

  async getAllAnimals(): Promise<Animal[]> {
    return await this.db.select().from(animals);
  }

  async getAnimalById(id: string): Promise<Animal | undefined> {
    const result = await this.db.select().from(animals).where(eq(animals.id, id)).limit(1);
    return result[0];
  }

  async createAnimal(insertAnimal: InsertAnimal): Promise<Animal> {
    const result = await this.db.insert(animals).values(insertAnimal).returning();
    return result[0];
  }

  async getAllContacts(): Promise<Contact[]> {
    return await this.db.select().from(contacts);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const result = await this.db.insert(contacts).values(insertContact).returning();
    return result[0];
  }
}

export class MemStorage implements IStorage {
  private animals: Map<string, Animal>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.animals = new Map();
    this.contacts = new Map();
    this.seedData();
  }

  private seedData() {
    const sampleAnimals: InsertAnimal[] = [
      {
        name: "Touro Nelore Premium",
        category: "bovinos",
        breed: "Nelore",
        age: 36,
        sex: "macho",
        weight: "650.00",
        price: "15000.00",
        description: "Touro Nelore de excelente genética, com características superiores de conformação e temperamento dócil. Ideal para reprodução e melhoramento de rebanho. Todos os exames veterinários em dia e certificado de origem.",
        imageUrl: "/generated_images/Premium_Nelore_bull_photo_78bd7ae3.png",
        featured: "yes",
        color: "cinza claro",
        height: "155.00",
      },
      {
        name: "Cavalo Quarto de Milha",
        category: "equinos",
        breed: "Quarter Horse",
        age: 48,
        sex: "macho",
        weight: "480.00",
        price: "25000.00",
        description: "Cavalo Quarto de Milha com excelente linhagem, treinado para trabalho com gado. Dócil, saudável e com toda documentação. Ideal para lida campeira e provas de rédeas.",
        imageUrl: "/generated_images/Quarter_horse_professional_photo_a58a4a2a.png",
        featured: "yes",
        color: "alazão",
        height: "152.00",
      },
      {
        name: "Ovelhas Dorper",
        category: "ovinos",
        breed: "Dorper",
        age: 24,
        sex: "fêmea",
        weight: "65.00",
        price: "1800.00",
        description: "Lote de ovelhas da raça Dorper, conhecidas pela excelente qualidade de carne e resistência. Animais saudáveis, com boa genética e prontos para reprodução. Ótima opção para produtores de carne ovina.",
        imageUrl: "/generated_images/White_sheep_flock_photo_d17c79a7.png",
        featured: "yes",
        color: "branca e preta",
      },
      {
        name: "Vaca Angus",
        category: "bovinos",
        breed: "Angus",
        age: 30,
        sex: "fêmea",
        weight: "520.00",
        price: "12000.00",
        description: "Vaca Angus de primeira qualidade, com histórico comprovado de produção. Excelente para cruzamento industrial e produção de carne nobre. Mansos e bem adaptados ao clima brasileiro.",
        imageUrl: "/generated_images/Angus_cattle_photo_8010e123.png",
        featured: "no",
        color: "preta",
        height: "140.00",
      },
      {
        name: "Cabras Leiteiras",
        category: "caprinos",
        breed: "Saanen",
        age: 18,
        sex: "fêmea",
        weight: "55.00",
        price: "1500.00",
        description: "Cabras leiteiras da raça Saanen, excelentes produtoras de leite de alta qualidade. Animais dóceis, com boa genética e manejo sanitário rigoroso. Perfeitas para produção de leite e derivados.",
        imageUrl: "/generated_images/Dairy_goats_photo_f8ec5122.png",
        featured: "no",
        color: "branca",
      },
      {
        name: "Novilho Nelore",
        category: "bovinos",
        breed: "Nelore",
        age: 18,
        sex: "macho",
        weight: "380.00",
        price: "6500.00",
        description: "Novilho Nelore jovem com excelente desenvolvimento e ganho de peso. Criado a pasto com suplementação mineral. Ideal para engorda ou sistema de cria. Documentação completa.",
        imageUrl: "/generated_images/Premium_Nelore_bull_photo_78bd7ae3.png",
        featured: "no",
        color: "cinza",
        height: "135.00",
      },
      {
        name: "Égua Mangalarga",
        category: "equinos",
        breed: "Mangalarga Marchador",
        age: 60,
        sex: "fêmea",
        weight: "420.00",
        price: "18000.00",
        description: "Égua Mangalarga Marchador com excelente marcha e genética comprovada. Mansa, saudável e com registro na ABCCMM. Ideal para reprodução e cavalgadas. Temperamento dócil e equilibrado.",
        imageUrl: "/generated_images/Quarter_horse_professional_photo_a58a4a2a.png",
        featured: "no",
        color: "castanha",
        height: "148.00",
      },
      {
        name: "Carneiros Dorper",
        category: "ovinos",
        breed: "Dorper",
        age: 20,
        sex: "macho",
        weight: "85.00",
        price: "2500.00",
        description: "Carneiros Dorper de alta qualidade genética para reprodução. Animais robustos, com excelente conformação e resistência. Ideais para melhoramento de rebanho ovino de corte.",
        imageUrl: "/generated_images/White_sheep_flock_photo_d17c79a7.png",
        featured: "no",
        color: "branca e preta",
      },
      {
        name: "Bode Anglo-Nubiano",
        category: "caprinos",
        breed: "Anglo-Nubiano",
        age: 24,
        sex: "macho",
        weight: "75.00",
        price: "2200.00",
        description: "Bode reprodutor da raça Anglo-Nubiana, conhecido pela dupla aptidão (leite e carne). Excelente genética, dócil e com todos os cuidados sanitários em dia. Ótima opção para melhoramento de plantel.",
        imageUrl: "/generated_images/Dairy_goats_photo_f8ec5122.png",
        featured: "no",
        color: "caramelo",
      },
    ];

    sampleAnimals.forEach(animal => {
      const id = randomUUID();
      this.animals.set(id, { 
        ...animal, 
        id,
        price: animal.price ?? null,
        featured: animal.featured ?? null,
        color: animal.color ?? null,
        height: animal.height ?? null,
      });
    });
  }

  async getAllAnimals(): Promise<Animal[]> {
    return Array.from(this.animals.values());
  }

  async getAnimalById(id: string): Promise<Animal | undefined> {
    return this.animals.get(id);
  }

  async createAnimal(insertAnimal: InsertAnimal): Promise<Animal> {
    const id = randomUUID();
    const animal: Animal = { 
      ...insertAnimal, 
      id,
      price: insertAnimal.price ?? null,
      featured: insertAnimal.featured ?? null,
      color: insertAnimal.color ?? null,
      height: insertAnimal.height ?? null,
    };
    this.animals.set(id, animal);
    return animal;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      phone: insertContact.phone ?? null,
      createdAt: new Date().toISOString(),
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

// Usar DbStorage se DATABASE_URL estiver disponível, caso contrário usar MemStorage
export const storage = process.env.DATABASE_URL ? new DbStorage() : new MemStorage();
